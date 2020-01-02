import React from 'react';
import  { Link } from "react-router-dom"
import {  Menu, Header} from 'semantic-ui-react'
import { connect } from 'react-redux'



function Navbar (props) {

      return (
                <Menu secondary  size='huge'>
                    <Menu.Item
                        as={ Link } name='Noodums' to='/'>
                       <img src='./img/Logo.png'/>    
                    </Menu.Item>

                    <Menu.Item
                        name="Noodums">    
                    </Menu.Item>

                    <Menu.Item
                        as={ Link } name='Menu' to='/menu'>    
                    </Menu.Item>

                    <Menu.Item
                        as={ Link } name='Our Story' to='/our_story'>    
                    </Menu.Item>
               
                     {props.user_id !== 2? 
                        <React.Fragment>
                            <Menu.Item
                            name='profile'
                            as={ Link } name='Profile' to='/profile'
                            />
                        </React.Fragment>
                        : null }

                     {props.user_id === 1 ? 
                        <React.Fragment>
                            <Menu.Item
                            name='Dashboard'
                            as={ Link } name='Dashboard' to='/dashboard'
                            />
                        </React.Fragment>
                        : null }


                <Menu.Menu position='right'>

                <Menu.Item 
                    as={ Link } name='cart' to='/cart'
                    name='cart' 
                />

                {props.user_id === 2? 
                    <React.Fragment>
                         <Menu.Item
                            name='login'
                            as={ Link } name='Login' to='/login'
                        />
                        
                         <Menu.Item
                            name='signup'
                            as={ Link } name='Signup' to='/signup'
                        />
                    </React.Fragment>
                :
                <React.Fragment>
                    <Menu.Item
                            name='logout'
                            as={ Link } name='logout' to='/'
                            onClick={props.logout}
                        />
                </React.Fragment>
                
                }
                </Menu.Menu>
            </Menu>
            
      )
    }

    function msp(state) {
        return (
            {
                user_id: state.user_id }
        )
    }

    function mdp(dispatch) {  
        return { 
            logout: ()=> {
                dispatch({type: "LOGOUT"})
            }
        }
    }
    

  export default connect(msp,mdp)(Navbar);
