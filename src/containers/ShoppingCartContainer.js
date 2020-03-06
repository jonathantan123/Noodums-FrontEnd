import React from 'react';
import { connect } from "react-redux"
import { Item, Button } from 'semantic-ui-react'
import Order from '../components/Order';
import  { Link } from "react-router-dom"
import Dinero from 'dinero.js'


class ShoppingCartContainer extends React.Component {

    subTotal= () => {
        let subtotal = Dinero({amount: this.props.cart.reduce((sum, obj) => {
            return  sum + obj.price*(obj.quantity) 
         }, 0)  }) 

         this.props.setSubTotal(subtotal.getAmount())

        return subtotal 
    }

    tax =(salesTax=.0875 ) => {
       return this.subTotal().multiply(salesTax)
      }

    total = () => {
        
        let total = this.subTotal().add((this.tax()))
        this.props.setTotal(total.getAmount())
      
        return total 
    }  


    renderShoppingCart =  () => {
        return(
            this.props.cart.map((order) => {
            return <Order order={order} key={order.id}/>
        })
        ) 
    } 

    render() { 
 
        return (
            <div className="order-container">
                <div className="order-receipt"> 
                    <h1>Order Summary:</h1>
                    <Item.Group>
                        {this.renderShoppingCart()}
                    </Item.Group>
                    <h2>SubTotal: ---- {this.subTotal().toFormat('$0.00')}</h2>
                    <h2>Tax: ---- {this.tax().toFormat('$0.00')} </h2>
                    <h2>Total: ----{this.total().toFormat('$0.00')} </h2>
                    <br></br>
                    <Button size="small"
                    as={ Link } name='checkout' to='/checkout'
                    > Checkout</Button>
                </div>
            </div>
         )
        }
    }

function msp(state) {
    return (
        {
            cart: state.cart
        }
    )
}

function mapDispatchToProps(dispatch) {
    return {
        setTotal: (price) => {
            dispatch({type: "SET_TOTAL", payload: price })
        },
        setSubTotal: (price) => {
            dispatch({type: "SET_SUBTOTAL", payload: price })
        }
    }
}
export default connect(msp, mapDispatchToProps) (ShoppingCartContainer)