
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'


class SalesItemChart extends React.Component {

    state = { 
        itemSales: [], 
        isLoading: true, 
        data: [] 
    }

//// should move to login

componentDidMount() {
    
        fetch(`https://noodums-app-api.herokuapp.com/api/v1/orders`)
        .then(resp => resp.json())
        .then((data) => {   
            this.setState({
                itemSales: data.ordersPerMonth, 
                isLoading: !this.state.isLoading,
                data: [
                    {
                      "Month": "Jan",
                      "Buffalo Exchange": data.ordersPerMonth[0][0].length,
                      "Buffalo ExchangeColor": "hsl(154, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[0][1].length,
                      "The TraditionalColor": "hsl(243, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[0][2].length,
                      "ItalianoColor": "hsl(65, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[0][3].length,
                      "Kimchi TofuColor": "hsl(328, 70%, 50%)",
                    
                    },
                    {
                      "Month": "Feb",
                      "Buffalo Exchange": data.ordersPerMonth[1][0].length,
                      "Buffalo ExchangeColor": "hsl(294, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[1][1].length,
                      "The TraditionalColor": "hsl(23, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[1][2].length,
                      "ItalianoColor": "hsl(12, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[1][3].length,
                      "Kimchi TofuColor": "hsl(330, 70%, 50%)",
                    
                    },
                    {
                      "Month": "Mar",
                      "Buffalo Exchange": data.ordersPerMonth[2][0].length,
                      "Buffalo ExchangeColor": "hsl(169, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[2][1].length,
                      "The TraditionalColor": "hsl(42, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[2][2].length,
                      "ItalianoColor": "hsl(161, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[2][3].length,
                      "Kimchi TofuColor": "hsl(39, 70%, 50%)",
                      
                    },
                    {
                      "Month": "Apr",
                      "Buffalo Exchange": data.ordersPerMonth[3][0].length,
                      "Buffalo ExchangeColor": "hsl(129, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[3][1].length,
                      "The TraditionalColor": "hsl(208, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[3][2].length,
                      "ItalianoColor": "hsl(215, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[3][3].length,
                      "Kimchi TofuColor": "hsl(26, 70%, 50%)",
            
                    },
                    {
                      "Month": "May",
                      "Buffalo Exchange": data.ordersPerMonth[4][0].length,
                      "Buffalo ExchangeColor": "hsl(156, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[4][1].length,
                      "The TraditionalColor": "hsl(180, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[4][2].length,
                      "ItalianoColor": "hsl(232, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[4][3].length,
                      "Kimchi TofuColor": "hsl(139, 70%, 50%)",
                   
                    },
                    {
                      "Month": "Jun",
                      "Buffalo Exchange": data.ordersPerMonth[5][0].length,
                      "Buffalo ExchangeColor": "hsl(274, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[5][1].length,
                      "The TraditionalColor": "hsl(163, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[5][2].length,
                      "ItalianoColor": "hsl(213, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[5][3].length,
                      "Kimchi TofuColor": "hsl(355, 70%, 50%)",
                      
                 
                    },
                    {
                      "Month": "Jul",
                      "Buffalo Exchange": data.ordersPerMonth[6][0].length,
                      "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[6][1].length,
                      "The TraditionalColor": "hsl(23, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[6][2].length,
                      "ItalianoColor": "hsl(47, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[6][3].length,
                      "Kimchi TofuColor": "hsl(121, 70%, 50%)",
                      
                    },
                    {
                      "Month": "Aug",
                      "Buffalo Exchange": data.ordersPerMonth[7][0].length,
                      "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[7][1].length,
                      "The TraditionalColor": "hsl(23, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[7][2].length,
                      "ItalianoColor": "hsl(47, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[7][3].length,
                      "Kimchi TofuColor": "hsl(121, 70%, 50%)",
                      
                    },
                    {
                      "Month": "Sep",
                      "Buffalo Exchange": data.ordersPerMonth[8][0].length,
                      "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[8][1].length,
                      "The TraditionalColor": "hsl(23, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[8][2].length,
                      "ItalianoColor": "hsl(47, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[8][3].length,
                      "Kimchi TofuColor": "hsl(121, 70%, 50%)",
                      
                    },
                    {
                      "Month": "Oct",
                      "Buffalo Exchange": data.ordersPerMonth[9][0].length,
                      "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[9][1].length,
                      "The TraditionalColor": "hsl(23, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[9][2].length,
                      "ItalianoColor": "hsl(47, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[9][3].length,
                      "Kimchi TofuColor": "hsl(121, 70%, 50%)",
                      
                    },
                    {
                      "Month": "Nov",
                      "Buffalo Exchange": data.ordersPerMonth[10][0].length,
                      "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[10][1].length,
                      "The TraditionalColor": "hsl(23, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[10][2].length,
                      "ItalianoColor": "hsl(47, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[10][3].length,
                      "Kimchi TofuColor": "hsl(121, 70%, 50%)",
                      
                    },
                    {
                      "Month": "Dec",
                      "Buffalo Exchange": data.ordersPerMonth[11][0].length,
                      "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
                      "The Traditional": data.ordersPerMonth[11][1].length,
                      "The TraditionalColor": "hsl(23, 70%, 50%)",
                      "Italiano": data.ordersPerMonth[11][2].length,
                      "ItalianoColor": "hsl(47, 70%, 50%)",
                      "Kimchi Tofu": data.ordersPerMonth[11][3].length,
                      "Kimchi TofuColor": "hsl(121, 70%, 50%)",
                      
                    }
                  ]
            }) 
        })
    }

    


    render() {

        return (
            <React.Fragment>
                {this.state.isLoading? 
                    <React.Fragment>
                    <h2>Page Is Loading</h2>
                    </React.Fragment>          
                    : 
                            <div className="chart-container">
                                <h2>Items by Total Sales (2019)</h2>
                                <ResponsiveBar
                        data={this.state.data}
                        keys={[ 'Buffalo Exchange', 'The Traditional', 'Italiano', 'Kimchi Tofu' ]}
                        indexBy="Month"
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
                                    id: 'Italiano'
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
                            legend: 'Month',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Orders',
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
             
                }
            </React.Fragment>
        )



            }      
}

export default SalesItemChart
