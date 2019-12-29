
import React from 'react';
import { connect } from "react-redux"
import { Redirect} from 'react-router-dom'



class Login extends React.Component {

    state = { 
        username: "", 
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
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
                this.props.addToFavorites(data.data.attributes.items)
                this.props.getUserInfo(data.data.attributes)
                
                }
            })  
    }

    render() {
        return (
               <div className="form-div">
                <form onSubmit={this.submitHandler} class="ui medium form">
                                <div class="ui stacked segment">
                                    <div class="field">
                                        <label>Email Address</label>
                                        <input type="text" onChange={this.changeHandler} placeholder="Email Address" name="username"></input>
                                    </div>
                                    <div class="field">
                                        <label>Password</label>
                                        <input type="password" onChange={this.changeHandler} placeholder="password" name="password"></input>
                                    </div>
                                        <button class="ui fluid large grey submit button" type="submit"> Login</button>
                                        {this.props.user_id !== 1 ?
                                        <React.Fragment>
                                            <Redirect to="/profile"/>
                                        </React.Fragment>
                                        :
                                        null 
                                        }
                                </div>
                    </form>
                    </div>
        )
    }
} 

function mapDispatchToProps(dispatch) {  
    return { 

        login: (id)=> {
            dispatch({type: "LOGIN", payload: id })
        }, 

        addToFavorites: (favorites) => {
            dispatch({type: "ADD_TO_FAVORITES", payload: favorites})
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

