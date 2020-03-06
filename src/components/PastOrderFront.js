import React from "react";
import { Button, List, Grid } from "semantic-ui-react";
import Moment from "react-moment";
import Receipt from "./Receipt";
import { connect } from "react-redux";
import Dinero from "dinero.js";

class PastOrderFront extends React.Component {
  state = {
    clicked: false,
    data: [],
    total: "",
    subtotal: ""
  };

  toggleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  addToFaves = item => {
    fetch(`https://noodums-app-api.herokuapp.com/api/v1/favorites`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item_id: item.id,
        user_id: this.props.user_id
      })
    })
      .then(resp => resp.json())
      .then(data => {
        let itemToFind = this.props.menuItems.find(
          itemToFind => itemToFind.id === data.item_id
        );
        this.props.addToFavorites(itemToFind);
      });
  };

  /// conditionally render button based on if user already has save as favorites
  renderButton = item => {
    let exisitingFavorite = this.props.favorites.find(
      fave => fave.id === item.id
    );

    if (exisitingFavorite === undefined) {
      return (
        <Button onClick={() => this.addToFaves(item)}>Add to Favorites</Button>
      );
    } else {
      return;
    }
  };

  //// on click of button to view order, fetch necessary info
  clickHandler = () => {
    fetch(
      `https://noodums-app-api.herokuapp.com/api/v1/orders/${this.props.order.id}`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          data: data.data.attributes,
          clicked: !this.state.clicked,
          total: Dinero({ amount: data.data.attributes.total_price }).toFormat(
            "$0.00"
          ),
          subtotal: Dinero({ amount: data.data.attributes.subtotal }).toFormat(
            "$0.00"
          )
        });
      });
  };

  renderReceipts = () => {
    return this.state.data.items.map(item => {
      return (
        <React.Fragment>
          <Receipt item={item} data={this.state.data} />
          {this.renderButton(item)}
        </React.Fragment>
      );
    });
  };

  render() {
    let dateToFormat = this.props.order.created_at;

    return (
      <React.Fragment>
        {this.state.clicked ? (
          <React.Fragment>
            {this.renderReceipts()}
            <h3>Subtotal: {this.state.subtotal} </h3>
            <h3>Total: {this.state.total} </h3>
            <Button onClick={this.toggleClick}>Back</Button>
          </React.Fragment>
        ) : (
          <List.Item>
            <List.Content>
              <List.Header>
                <Moment format="LLLL">{dateToFormat}</Moment>
              </List.Header>
              <Grid>
                <Grid.Row centered>
                  <Button onClick={this.clickHandler}>View Order</Button>
                </Grid.Row>
              </Grid>
            </List.Content>
          </List.Item>
        )}
      </React.Fragment>
    );
  }
}

function msp(state) {
  return {
    user_id: state.user_id,
    menuItems: state.menuItems,
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToFavorites: item => {
      dispatch({ type: "ADD_TO_FAVORITES", payload: item });
    }
  };
}

export default connect(msp, mapDispatchToProps)(PastOrderFront);
