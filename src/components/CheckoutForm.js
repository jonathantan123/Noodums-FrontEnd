import React from 'react';
import { connect } from 'react-redux'
import { Form, Input, Divider, Grid, Header } from 'semantic-ui-react'
import { compose } from 'redux'
import  {injectStripe} from 'react-stripe-elements';

class CheckoutForm extends React.Component{

  
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }


    submitHandler= () => {

      let stripe = window.Stripe("pk_test_nN7xRtMVqkrqGYbZkpHkttjB00xj4HmkBz")
 
         fetch(`https://noodums-app-api.herokuapp.com/api/v1/order_items`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.user_id, 
                array: this.props.cart,
                total: this.props.total, 
                subtotal: this.props.subtotal
            })      
        })
        
         fetch(`https://noodums-app-api.herokuapp.com/charges`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              total: this.props.total
            })      
        })
        .then(resp => resp.json())
        .then((data) => {

          stripe.redirectToCheckout({
            sessionId: data.id
          })

        })

    }

    render() {
        return(
        <div className="checkout-main">
          <div className="checkout-form">
            <Form onSubmit={this.submitHandler}>
            <Form.Group widths='equal'>
            
              <Form.Field
                id="first name"
                control={Input}
                label='First Name'
                placeholder='First name'
              />
              <Form.Field
                id='last name'
                control={Input}
                label='Last Name'
                placeholder='Last Name'
              />
              </Form.Group>

                <Form.Field
                id='phone number'
                control={Input}
                label='Phone Number'
                placeholder='Phone Number'
              />

                <Form.Field
                id='email address'
                control={Input}
                label='Email Address'
                placeholder='Email Address'
              />
              <Divider/>
              <Header as='h3' textAlign='center'> Payment </Header>
              <Divider/>
             
              <Grid>
                <Grid.Row centered>
                <Form.Button >Proceed to Payment</Form.Button>
                </Grid.Row>
              </Grid>
            </Form>
            </div>
          </div>
        ) 
    }
}

function msp(state) {
    return (
        {
            cart: state.cart, 
            user_id: state.user_id, 
            total: state.total, 
            subtotal: state.subtotal
        }
    )
}


export default compose(
  connect(msp),
  injectStripe)(CheckoutForm)