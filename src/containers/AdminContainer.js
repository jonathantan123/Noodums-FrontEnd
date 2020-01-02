import React from 'react';
import ProfleSideBar from '../components/ProfileSideBar';
import FavoritesPage from '../components/FavoritesPage';
import { Grid, List } from 'semantic-ui-react'
import ProfilePage from '../components/ProfilePage';
import {connect} from "react-redux"
import PastOrderFront from '../components/PastOrderFront';
import AdminSideBar from '../components/AdminSideBar';
import RevenueChart from '../components/RevenueChart';
import OrdersChart from '../components/OrdersChart';
import ItemPopularityChart from '../components/ItemPopularityChart';



class AdminContainer extends React.Component {

    state = { 
        activeItem: '' 
    }

    setActive = (e,menuItem) => {
        this.setState( {activeItem: menuItem.name})
        console.log(this.state)
    }


    render() { 

        switch (this.state.activeItem) {

            case "Monthly Orders":
                return(
                         <Grid>
                            <Grid.Column width={3}>
                            <AdminSideBar setActive={this.setActive}/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <OrdersChart/>
                            </Grid.Column>
                        </Grid>         
                )
                break;

            case "Monthly Revenue":
                return(
                        <Grid>
                            <Grid.Column width={3}>
                            <AdminSideBar setActive={this.setActive}/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <RevenueChart/> 
                            </Grid.Column>
                        </Grid>         
                     
                )
                break;
            case "Total Sales by Item":
                return(
                        <Grid>
                            <Grid.Column width={3}>
                            <AdminSideBar setActive={this.setActive}/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <ItemPopularityChart/>

                            </Grid.Column>
                        </Grid>         
                     
                )
                break;
        
            default:
                return(
                    <AdminSideBar setActive={this.setActive}/>
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




export default connect(msp)(AdminContainer)