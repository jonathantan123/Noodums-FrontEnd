import React from 'react';
import ProfleSideBar from '../components/ProfileSideBar';
import FavoritesPage from '../components/FavoritesPage';
import { Grid } from 'semantic-ui-react'
import ProfilePage from '../components/ProfilePage';
import {connect} from "react-redux"
import PastOrder from '../components/PastOrder';






class ProfileContainer extends React.Component {

    state = { 
        activeItem: '' 
    }

    setActive = (e,menuItem) => {
        this.setState( {activeItem: menuItem.name})
        console.log(this.state)
    }

    renderPastOrders = () => {
        debugger 
        return( 
            this.props.user_info.orders.map((order) => {
                return (
                    <PastOrder order={order}/>
          )}))

    }


    render() { 

        switch (this.state.activeItem) {

            case "Favorite":
                return(

                    <React.Fragment>
                                <ProfleSideBar setActive={this.setActive}/>
                                <FavoritesPage/> 
                    </React.Fragment>
                )
                break;

            case "View/Edit Profile":
                return(
                    <React.Fragment>
                        <ProfleSideBar setActive={this.setActive}/>
                        <ProfilePage/>
                    </React.Fragment>
                )
                break;

            case "Past Orders":
                    
                return(
                    
                    <React.Fragment>
                        <ProfleSideBar setActive={this.setActive}/>
                        {this.renderPastOrders()}
                      
                    </React.Fragment>
                )
                break;
        
            default:
                return(
                    <ProfleSideBar setActive={this.setActive}/>
                )
                break;
        }
    }

   
}


function msp(state) {

    return {
        user_info: state.user_info
    }
}




export default connect(msp)(ProfileContainer)