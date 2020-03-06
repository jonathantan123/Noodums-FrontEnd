import React from 'react';
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import LandingPage from './LandingPage';
import MenuPage from './MenuPage';
import ShoppingCartContainer from './ShoppingCartContainer';
import CheckoutForm from '../components/CheckoutForm';
import ProfileContainer from './ProfileContainer';
import { Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"
import {Elements, StripeProvider, Redirect} from 'react-stripe-elements';
import AdminContainer from './AdminContainer';


class MainContainer extends React.Component {

    state = {
        menuArray: [], 
        isLoading: true 
    }

    componentDidMount() {
        fetch("https://noodums-app-api.herokuapp.com/api/v1/items")
        .then(resp => resp.json()) 
        .then((data) => {
            this.props.setMenuArray(data)
            this.setState({
                menuArray: data,
                isLoading: !this.state.isLoading
            })
        })
    } 

///------------Functions for components To Render Per Route ------------------------///

renderProfile = () => {
    return(
        <React.Fragment>
            {this.props.user_id !== 2 ?
             <ProfileContainer/>     
            :
            <LandingPage/>
            }
        </React.Fragment>
    ) 
    }

renderCheckout = () => {
    return (
        <StripeProvider apiKey="pk_test_nN7xRtMVqkrqGYbZkpHkttjB00xj4HmkBz">
            <Elements>
                 <CheckoutForm />
          </Elements>
       </StripeProvider>
    )
}

///-----------------------Routes--------------------------------------///
    render() {
        return (
            this.state.isLoading? 
            <div> Website is loading......</div>
            : 
            <div >
                <Switch>

                 <Route  path="/login">
                    <Login/>
                </Route>

                 <Route  path="/dashboard">
                  <AdminContainer/> 
                 </Route>

                 <Route  path="/menu">
                    <MenuPage/>
                </Route> 

                 <Route  path="/signup">
                    <SignUp/>
                 </Route>

                 <Route  path="/cart">
                    <ShoppingCartContainer/>
                 </Route>

                 <Route  path="/profile" render={this.renderProfile}/>

                 <Route  path="/checkout" render={this.renderCheckout}/>

                 <Route  exact path="/">
                     <LandingPage/>
                </Route>

                </Switch>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMenuArray: (data) => {
            dispatch({type: "SET_MENU_ARRAY", payload: data })
        }
    }
}

function msp(state) {
    return {
        user_id: state.user_id
    }
}

export default connect(msp,mapDispatchToProps)(MainContainer)