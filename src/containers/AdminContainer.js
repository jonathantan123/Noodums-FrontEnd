import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import AdminSideBar from "../components/AdminSideBar";
import RevenueChart from "../components/RevenueChart";
import OrdersChart from "../components/OrdersChart";
import ItemPopularityChart from "../components/ItemPopularityChart";
import EditForm from "../components/EditForm";
import SalesItemChart from "../components/SalesItemChart";

class AdminContainer extends React.Component {
  state = {
    activeItem: "",
    submitted: true
  };

  setActive = menuItem => {
    this.setState({ activeItem: menuItem.name });
  };

  render() {
    switch (this.state.activeItem) {
      case "Monthly Orders":
        return (
          <Grid>
            <Grid.Column width={3}>
              <AdminSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <OrdersChart />
            </Grid.Column>
          </Grid>
        );

      case "Monthly Revenue":
        return (
          <Grid>
            <Grid.Column width={3}>
              <AdminSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <RevenueChart />
            </Grid.Column>
          </Grid>
        );

      case "Total Sales by Item":
        return (
          <Grid>
            <Grid.Column width={3}>
              <AdminSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <ItemPopularityChart />
            </Grid.Column>
          </Grid>
        );

      case "Total Sales by Item Count":
        return (
          <Grid>
            <Grid.Column width={3}>
              <AdminSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <SalesItemChart />
            </Grid.Column>
          </Grid>
        );

      case "Edit Credentials":
        return (
          <Grid>
            <Grid.Column width={3}>
              <AdminSideBar setActive={this.setActive} />
            </Grid.Column>
            <Grid.Column width={13}>
              <EditForm />
            </Grid.Column>
          </Grid>
        );

      default:
        return <AdminSideBar setActive={this.setActive} />;
    }
  }
}

function msp(state) {
  return {
    user_info: state.user_info
  };
}

export default connect(msp)(AdminContainer);
