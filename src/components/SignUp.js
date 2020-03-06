
import React from 'react';
import { Form, Input, Divider, Grid} from 'semantic-ui-react'
import {connect} from "react-redux"
import { Redirect} from 'react-router-dom'

class SignUp extends React.Component {

    state = { 
        first_name: "", 
        last_name:  "", 
        phone_number: "",
        email_address: "", 
        confirm_email_address: "",
        confirm_password: "",
        password: ""
    }

     emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

      phoneIsValid(number) {
          return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)
      }

    changeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        }) 
    }
  
    submitHandler=(e) => {
        e.preventDefault()
        
        if (this.state.email_address === this.state.confirm_email_address 
            && this.state.password === this.state.confirm_password 
            && this.emailIsValid(this.state.email_address) 
            && this.phoneIsValid(this.state.phone_number))
        {
            fetch(`https://noodums-app-api.herokuapp.com/api/v1/users`, {
                method: "POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        email_address: this.state.email_address, 
                        password: this.state.password,
                        first_name: this.state.first_name,
                        last_name: this.state.last_name, 
                        phone_number: this.state.phone_number
                    })
            })
            .then(resp => resp.json())
            .then((data) => {
                if(data.errors) {
                    alert(data.errors[0])
                } else {
                    this.props.login(data.data.id)
                    this.props.setFavorites(data.data.attributes.items)
                    this.props.getUserInfo(data.data.attributes)
                }
            })
        } else { 
            alert( "Please enter a valid email address or phone number/ ensure passwords and email adresses match ")
        }
     }

    render() {
        return (
            <div className="signup_container">
                <div className="signup_form">
                <Form onSubmit={this.submitHandler}>
                <Form.Group widths='equal'>
                
                <Form.Field
                    id="first_name"
                    control={Input}
                    onChange={this.changeHandler}
                    label='First Name'
                    placeholder='First name'
                />
                <Form.Field
                    id='last_name'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Last Name'
                    placeholder='Last Name'
                />
                </Form.Group>

                    <Form.Field
                    id='phone_number'
                    control={Input}
                    label='Phone Number'
                    placeholder='Phone Number'
                    onChange={this.changeHandler}

                />

                    <Form.Field
                    id='email_address'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Email Address'
                    
                    placeholder='Email Address'
                />

                <Form.Field
                    id='confirm_email_address'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Confirm Email Address'
                    placeholder='Confirm Email Address'
                />

                    <Form.Field
                    id='password'
                    control={Input}
                    onChange={this.changeHandler}
                    label='Password'
                    type='password'
                    placeholder='Password'
                />

                <Form.Field
                    id='confirm_password'
                    control={Input}
                    type='password'
                    onChange={this.changeHandler}
                    label='Confirm Password'
                    placeholder='Confirm Password '
                />
                <Divider/>
                <Divider/>
                
                <Form.Group widths='equal'>
                
                </Form.Group>
                <Grid>
                    <Grid.Row centered>
                    <Form.Button >Sign Me Up </Form.Button>
                    </Grid.Row>
                </Grid>
                </Form>

                {this.props.user_id !== 2 ?
                    <React.Fragment>
                        <Redirect to="/login"/>
                    </React.Fragment>
                    :
                    null 
                    }
                </div>
          </div>
        )
     }
    }


function mapStateToProps(state) {
    return { 
        user_id: state.user_id
    }
}

function mapDispatchToProps(dispatch) {  
    return { login: (id)=> {
        dispatch({type: "LOGIN", payload: id })
     }, 

      setFavorites: (favorites) => {
            dispatch({type: "SET_FAVORITES", payload: favorites})
        },

        getUserInfo: (data) => {
            dispatch({type: "GET_USER_INFO", payload: data})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)