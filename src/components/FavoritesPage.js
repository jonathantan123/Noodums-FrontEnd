import React from "react";
import { connect } from "react-redux";
import Order from "./Order";

function FavoritesPage(props) {
  function renderFaves(props) {
    /// conditional rendering of favorites

    if (props.favorites.length !== 0) {
      return props.favorites.map(fave => {
        return <Order order={fave} favoriteId={fave.id} />;
      });
    } else {
      return <h1>You have no favorites yet! </h1>;
    }
  }

  return <div>{renderFaves(props)}</div>;
}

let mapStateToProps = state => {
  return { favorites: state.favorites };
};

export default connect(mapStateToProps)(FavoritesPage);
