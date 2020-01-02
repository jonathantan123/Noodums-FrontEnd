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
import EditForm from '../components/EditForm';
import SalesByItemByMonthChart from '../components/SalesByItemByMonthChart';
import SalesItemChart from '../components/SalesItemChart';



class AdminContainer extends React.Component {

    state = { 
        activeItem: '', 
        submitted: true 
    }

    setActive = (e, menuItem) => {
        console.log(menuItem)
        this.setState( {activeItem: menuItem.name})
        console.log(this.state)
    }

  

  

    render() { 
        console.log(this.state.activeItem)
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
                                {/* <SalesByItemByMonthChart/> */}
                            </Grid.Column>
                        </Grid>         
                     
                )
                break;
            case "Total Sales by Item Count":
                return(
                        <Grid>
                            <Grid.Column width={3}>
                            <AdminSideBar setActive={this.setActive}/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <SalesItemChart/>
                            
                                
                            </Grid.Column>
                        </Grid>         
                     
                )
                break;
            case "Edit Credentials":
                return(
                        <Grid>
                            <Grid.Column width={3}>
                            <AdminSideBar setActive={this.setActive} />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <EditForm/>
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