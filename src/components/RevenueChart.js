import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { connect } from "react-redux";
import Dinero from "dinero.js";

class RevenueChart extends React.Component {
  componentDidMount() {
    fetch(`https://noodums-app-api.herokuapp.com/api/v1/orders`)
      .then(resp => resp.json())
      .then(data => {
        this.props.setRevenue(data.revenue);
      });
  }

  formatNumbers = () => {
    return this.props.revenue.map(amount =>
      parseInt(Dinero({ amount: amount }).toFormat("0.00"))
    );
  };

  render() {
    let revenue = this.formatNumbers();

    let months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sept",
      "oct",
      "nov",
      "dec"
    ];

    function makeDataPoints(months) {
      return months.map((month, i) => {
        return {
          x: month,
          y: revenue[i]
        };
      });
    }

    let dataPoints = makeDataPoints(months);
    let data = [
      {
        id: "2019",
        color: "hsl(213, 70%, 50%)",
        data: dataPoints
      }
    ];

    return (
      <div className="chart-container">
        <h2>Revenue By Month</h2>
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
            legend: "Revenue (in dollars)",
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
    setRevenue: revenue => {
      dispatch({ type: "SET_REVENUE", payload: revenue });
    }
  };
}

function mapStateToProps(state) {
  return {
    revenue: state.revenue
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RevenueChart);
