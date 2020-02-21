
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import {connect} from "react-redux"


class ItemPopularityChart extends React.Component {

//// should move to login

    componentDidMount() {
        fetch(`https://noodums-app-api.herokuapp.com/api/v1/orders`)
        .then(resp => resp.json())
        .then((data) => {     
            
            this.props.setQuantity(data.quantity)
        })
    }

    render() {
        
        let quantity = this.props.quantity

        let data = 
        [
            {
              "Item": "Buffalo Exchange",
              "Buffalo Exchange": quantity[0],
              "Buffalo Exchange color": "hsl(14, 70%, 50%)",
             
            },
            {
              "Item": "The Traditional",
              "The Traditional": quantity[1],
              "The TraditionalColor": "hsl(23, 70%, 50%)",
            },
            {
              "Item": "Italiano",
              "Italiano": quantity[2],
              "ItalianoColor": "hsl(161, 70%, 50%)",
            },
            {
              "Item": "Kimchi Tofu",
              "Kimchi Tofu": quantity[3],
              "Kimchi TofuColor": "hsl(39, 70%, 50%)",
            }
          ]

        return (
            
            <div className="chart-container">
                <h2>Items by Total Sales (2019)</h2>
                <ResponsiveBar
                    data={data}
                    keys={[ 'Buffalo Exchange', 'The Traditional', 'Italiano', 'Kimchi Tofu' ]}
                    indexBy="Item"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'fries'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'sandwich'
                            },
                            id: 'lines'
                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Item',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Total Orders',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
                </div>  
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
        setQuantity: (quantity) => {
            dispatch({type: "SET_QUANTITY", payload: quantity })
        }
    }
}

function mapStateToProps(state) {
    return {
        quantity: state.quantity
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPopularityChart)
