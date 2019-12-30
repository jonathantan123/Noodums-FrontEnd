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
                         <Grid>
                            <Grid.Column width={2}>
                            <ProfleSideBar setActive={this.setActive}/>
                            </Grid.Column>
                            <Grid.Column width={14}>
                            <FavoritesPage/> 
                            </Grid.Column>
                        </Grid>         
                )
                break;

            case "View/Edit Profile":
                return(
                        <Grid>
                            <Grid.Column width={2}>
                            <ProfleSideBar setActive={this.setActive}/>
                            </Grid.Column>
                            <Grid.Column width={14}>
                            <ProfilePage/> 
                            </Grid.Column>
                        </Grid>         
                     
                )
                break;

            case "Past Orders":
                    
                return(
                    <Grid>
                        <Grid.Column width={2}>
                        <ProfleSideBar setActive={this.setActive}/>
                        </Grid.Column>
                        <Grid.Column width={14}>
                        {this.renderPastOrders()}
                        </Grid.Column>
                </Grid>         
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