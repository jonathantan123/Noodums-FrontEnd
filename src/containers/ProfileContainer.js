import React from "react";
import ProfleSideBar from "../components/ProfileSideBar";
import FavoritesPage from "../components/FavoritesPage";
import { Grid, List } from "semantic-ui-react";
import ProfilePage from "../components/ProfilePage";
import { connect } from "react-redux";
import PastOrderFront from "../components/PastOrderFront";

class ProfileContainer extends React.Component {
  state = {
    activeItem: ""
  };

  setActive = (e, menuItem) => {
    this.setState({ activeItem: menuItem.name });
  };

  renderPastOrders = () => {
    return this.props.user_info.orders.map(order => {
      return <PastOrderFront order={order} />;
    });
  };

  addToFaves = () => {
    fetch(`https://noodums-app-api.herokuapp.com/api/v1/favorites`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item_id: this.props.item.id,
        user_id: this.props.user_id
      })
    })
      .then(resp => resp.json())
      .then(data => {
        let item = this.props.menuItems.find(item => item.id === data.item_id);

        this.props.addToFavorites(item);
      });
  };

  render() {
    switch (this.state.activeItem) {
      case "Favorite":
        return (
          <Grid>
            <Grid.Column width={3}>
              <ProfleSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <FavoritesPage />
            </Grid.Column>
          </Grid>
        );

      case "View/Edit Profile":
        return (
          <Grid>
            <Grid.Column width={3}>
              <ProfleSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <ProfilePage />
            </Grid.Column>
          </Grid>
        );

      case "Past Orders":
        return (
          <Grid>
            <Grid.Column width={3}>
              <ProfleSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <List animated verticalAlign="middle">
                {this.renderPastOrders()}
              </List>
            </Grid.Column>
          </Grid>
        );

      default:
        return <ProfleSideBar setActive={this.setActive} />;
    }
  }
}

function msp(state) {
  return {
    user_info: state.user_info
  };
}

export default connect(msp)(ProfileContainer);
