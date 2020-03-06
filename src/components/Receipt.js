import React from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import Dinero from "dinero.js";

function Receipt(props) {
  let formatPrice = () => {
    let price = Dinero({ amount: props.item.price });
    return price.toFormat(`$0.00`);
  };

  let findQuantity = () => {
    let item = props.data.order_items.find(o => o.item_id === props.item.id);
    return item.quantity;
  };

  return (
    <React.Fragment>
      <Item.Group>
        <Item>
          <Item.Image size="small" src={`${props.item.image}`} />
          <Item.Content>
            <Item.Header> {props.item.name}</Item.Header>
            <Item.Meta></Item.Meta>
            <Item.Description>
              Quantity X {findQuantity()}
              <br></br>
              Price: {formatPrice()}
            </Item.Description>
            <Item.Extra>{props.item.description}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      {/* {this.renderButton()} */}
    </React.Fragment>
  );
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

export default connect(msp, mapDispatchToProps)(Receipt);
