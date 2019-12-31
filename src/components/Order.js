import React from 'react';
import { Item, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Dinero from 'dinero.js'


class  Order  extends React.Component {

  state = {
    removed: true 
  }

   deleteFromCart = () => {
        this.props.removeFromCart(this.props.order.id)
        this.setState({
          removed: !this.state.removed
        })
   }   

   removeFromFaves = () => {
        this.props.removeFromFavorites(this.props.order.id)
        fetch(`http://localhost:3000/api/v1/favorites/${this.props.order.id}`)

        console.log("hi")
   }  

   formatPrice = () => {
     

     if (this.props.order) {
       let price = Dinero({amount: this.props.order.price})
      return price.toFormat(`$0.00`) 
     }

    
}

   render (){
     
     return (
     
     <Item.Group>
        <Item>
          <Item.Image size='small' src={`${this.props.order.image}`} />
          <Item.Content>
         <Item.Header> {this.props.order.name}</Item.Header>
     <Item.Meta></Item.Meta>
            <Item.Description>
              Quantity X {this.props.order.quantity}
              <br></br>
              Price:{this.formatPrice()}
            </Item.Description>
     <Item.Extra>{this.props.order.description}</Item.Extra>
          </Item.Content>
        </Item>

        {this.props.favorites.includes(this.props.order)?
         <Button onClick={this.removeFromFaves}> Remove</Button>
          :
            null        
      }
        {this.props.cart.includes(this.props.order)?
         <Button onClick={this.deleteFromCart}> Remove</Button>
          :
            null        
      }
       
        </Item.Group>
      
     )  
   }
   
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (id) => {
            dispatch({type: "REMOVE_FROM_CART", payload: id })
        },
        removeFromFavorites: (id) => {
          dispatch({type: "REMOVE_FROM_FAVORITES", payload: id })
      }
    }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites, 
    cart: state.cart
  }

}


  export default connect(mapStateToProps, mapDispatchToProps)(Order) 