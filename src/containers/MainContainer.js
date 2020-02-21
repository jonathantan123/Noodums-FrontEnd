import React from 'react';
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import MenuContainer from './MenuContainer';
import MenuPage from './MenuPage';
import ShoppingCartContainer from './ShoppingCartContainer';
import CheckoutForm from '../components/CheckoutForm';
import ProfileContainer from './ProfileContainer';
import { Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"
import {Elements, StripeProvider} from 'react-stripe-elements';
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
renderLanding = () => {
    return (
        <React.Fragment>
            <MenuContainer items={this.state.menuArray}/>
       </React.Fragment>
    )
}

renderLogin = () => {
    return (
        <React.Fragment>
            <Login/>
       </React.Fragment>
    )
}

renderSignup = () => {
    return (
        <React.Fragment>
            <SignUp/>
       </React.Fragment>
    )
}

renderCart = () => {
    return (
        <React.Fragment>
            <ShoppingCartContainer/>
       </React.Fragment>
    )
}

renderProfile = () => {
    return (
        <React.Fragment>
            <ProfileContainer/>
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
renderMenu = () => {
    return (
    <React.Fragment>
        <MenuPage/>
   </React.Fragment>
        
    )
}
renderDashboard = () => {
    return (
    <React.Fragment>
        <AdminContainer/>
   </React.Fragment>
        
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
                 <Route  path="/login" render={this.renderLogin}/>
                 <Route  path="/dashboard" render={this.renderDashboard}/>
                 <Route  path="/menu" render={this.renderMenu}/>
                 <Route  path="/signup" render={this.renderSignup}/>
                 <Route  path="/cart" render={this.renderCart}/>
                 <Route  path="/profile" render={this.renderProfile}/>
                 <Route  path="/checkout" render={this.renderCheckout}/>
                 <Route  exact path="/" render={this.renderLanding}/>
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

export default connect(null,mapDispatchToProps)(MainContainer)