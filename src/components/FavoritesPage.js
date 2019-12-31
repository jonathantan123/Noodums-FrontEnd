import React from "react"
import { connect } from "react-redux"
import Order from "./Order"


function renderFaves(props) {

if (props.favorites.length !== 0 ) {
    debugger
    
    
        return(props.favorites.map((fave) => {

            debugger


              return (<Order order={fave} favoriteId={fave.id}/>)
          })
        )
    } else {
        return ( 
        <h1>You have no favorites yet! </h1>    
            )
        }
}

 function FavoritesPage (props) {
    return (
        <div>
        {renderFaves(props)}
        </div>
        )

}

let mapStateToProps = (state) => {
    return {favorites: state.favorites}
}

export default connect(mapStateToProps)(FavoritesPage) 