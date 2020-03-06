import React from "react";
import MenuCardFront from "../components/MenuCardFront";
import MenuDescription from "../components/MenuDescription";
import { connect } from "react-redux";
import { CardGroup } from "semantic-ui-react";

class MenuPage extends React.Component {
  renderMenuCardsFront = () => {
    return this.props.menuItems.map(item => {
      return <MenuCardFront item={item} />;
    });
  };

  renderMenuDescriptions = () => {
    return this.props.menuItems.map(item => {
      return <MenuDescription item={item} />;
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="menu-image-container">
          <h1>Winter Menu</h1>
        </div>
        <div className="main-menu-container">
          <h2>Dumplings</h2>
          <div className="item-container">
            <CardGroup itemsPerRow={4}>
              {this.renderMenuCardsFront()}
              {this.renderMenuDescriptions()}
            </CardGroup>
          </div>
        </div>
        <div className="noodles-image-container"></div>
        <div className="main-menu-container">
          <h2>Noodles</h2>
          <div className="item-container">
            <CardGroup itemsPerRow={4}>
              {this.renderMenuCardsFront()}
              {this.renderMenuDescriptions()}
            </CardGroup>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state.menuItems
  };
}

export default connect(mapStateToProps)(MenuPage);
