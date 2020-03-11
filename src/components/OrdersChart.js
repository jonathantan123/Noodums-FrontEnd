import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { connect } from "react-redux";

class OrdersChart extends React.Component {
  //// should move to login

  componentDidMount() {
    fetch(`https://noodums-app-api.herokuapp.com/api/v1/orders`)
      .then(resp => resp.json())
      .then(data => {
        this.props.setNumberOfOrders(data.number_of_orders);
      });
  }

  render() {
    let orders = this.props.number_of_orders;

    let data = [
      {
        id: "2019",
        color: "hsl(213, 70%, 50%)",
        data: [
          {
            x: "Jan",
            y: orders[0]
          },
          {
            x: "Feb",
            y: orders[1]
          },
          {
            x: "Mar",
            y: orders[2]
          },
          {
            x: "Apr",
            y: orders[3]
          },
          {
            x: "May",
            y: orders[4]
          },
          {
            x: "Jun",
            y: orders[5]
          },
          {
            x: "Jul",
            y: orders[6]
          },
          {
            x: "Aug",
            y: orders[7]
          },
          {
            x: "Sep",
            y: orders[8]
          },
          {
            x: "Oct",
            y: orders[9]
          },
          {
            x: "Nov",
            y: orders[10]
          },
          {
            x: "Dec",
            y: orders[11]
          }
        ]
      }
    ];

    return (
      <div className="chart-container">
        <h2>Orders Per Month</h2>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Month",
            legendOffset: 36,
            legendPosition: "middle"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Number oF orders",
            legendOffset: -40,
            legendPosition: "middle"
          }}
          colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // setRevenue: (revenue) => {
    //     dispatch({type: "SET_REVENUE", payload: revenue })
    // },
    setNumberOfOrders: number_of_orders => {
      dispatch({ type: "SET_NUMBER_OF_ORDERS", payload: number_of_orders });
    }
  };
}

function mapStateToProps(state) {
  return {
    // revenue: state.revenue,
    number_of_orders: state.number_of_orders
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersChart);
