
import React from 'react';
import { connect } from "react-redux"
import { Redirect} from 'react-router-dom'
import { Form, Input, Grid, Button} from 'semantic-ui-react'


class Login extends React.Component {

    state = { 
        username: "", 
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    // on submit fetch and find/set the id of the current user to redux 

    submitHandler=(e) => {
        e.preventDefault() 
        fetch(`http://localhost:3000/login`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email_address: this.state.username, 
                    password: this.state.password
                })
        })
            .then(resp => resp.json())
            .then(data => {

                if(data.errors) {
                    alert("Incorrect Username/password")
                } else {          
                this.props.login(data.data.id) 
                this.props.setFavorites(data.data.attributes.items)
                this.props.getUserInfo(data.data.attributes) 
                }
            })  
    }

    render() {
        return (
            <div className="login-container">
               <div className="login-form">
                <Form onSubmit={this.submitHandler}>
                    <Form.Field
                        id="username"
                        control={Input}
                        onChange={this.changeHandler}
                        label='Email Address'
                        placeholder='Email Address'
                    />
                     <Form.Field
                        id='password'
                        control={Input}
                        onChange={this.changeHandler}
                        label='Password'
                        type='password'
                        placeholder='Password'
                    />

                        <Grid>
                            <Grid.Row centered>
                            <Form.Button >Log In </Form.Button>
                            </Grid.Row>
                        </Grid>
                           
                    
                        {this.props.user_id !== 1 ?
                        <React.Fragment>
                            <Redirect to="/profile"/>
                        </React.Fragment>
                            :

                        null 
                        }
                         </Form>
            </div>
                    </div>
        )
    }
} 

function mapDispatchToProps(dispatch) {  
    return { 

        login: (id)=> {
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

function mapStateToProps(state) {
    return { 
        user_id: state.user_id
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

