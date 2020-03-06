import React from "react";
import { Card, Menu } from "semantic-ui-react";
import Dinero from "dinero.js";

class MenuDescription extends React.Component {
  state = {
    show: false
  };

  clickHandler = () => {
    this.setState({
      show: !this.state.show
    });
  };

  formatPrice = () => {
    let price = Dinero({ amount: this.props.item.price });
    return price.toFormat(`$0.00`);
  };

  render() {
    return (
      <Card>
        <Card.Content onClick={this.props.clickHandler}>
          <Card.Header textAlign="center">{this.props.item.name}</Card.Header>
          <Card.Description>{this.props.item.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Menu secondary icon>
            <Menu.Item name="Price">{this.formatPrice()}</Menu.Item>
          </Menu>
        </Card.Content>
      </Card>
    );
  }
}

export default MenuDescription;
