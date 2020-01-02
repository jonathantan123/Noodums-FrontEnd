
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import {connect} from "react-redux"


class SalesByItemByMonthChart extends React.Component {
    
    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/orders`)
        .then(resp => resp.json())
        .then((data) => {     
            debugger
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

//     state = { 
//         itemSales: []
//     }

// //// should move to login

// componentDidMount() {
    
//     fetch(`http://localhost:3000/api/v1/orders`)
//     .then(resp => resp.json())
//     .then((data) => {    
//         debugger 
//         this.setState({
//             itemSales: data
//         })
//     })
// }


//     render() {
//         let itemSales 
        
//         let data = 
//         [
//             {
//               "Month": "Jan",
//               "Buffalo Exchange": itemSales[0][0].length,
//               "Buffalo ExchangeColor": "hsl(154, 70%, 50%)",
//               "The Traditional": itemSales[0][1].length,
//               "The TraditionalColor": "hsl(243, 70%, 50%)",
//               "Italiano": itemSales[0][2].length,
//               "ItalianoColor": "hsl(65, 70%, 50%)",
//               "Kimchi Tofu": itemSales[0][3].length,
//               "Kimchi TofuColor": "hsl(328, 70%, 50%)",
            
//             },
//             {
//               "Month": "Feb",
//               "Buffalo Exchange": itemSales[1][0].length,
//               "Buffalo ExchangeColor": "hsl(294, 70%, 50%)",
//               "The Traditional": itemSales[1][1].length,
//               "The TraditionalColor": "hsl(23, 70%, 50%)",
//               "Italiano": itemSales[1][2].length,
//               "ItalianoColor": "hsl(12, 70%, 50%)",
//               "Kimchi Tofu": itemSales[1][3].length,
//               "Kimchi TofuColor": "hsl(330, 70%, 50%)",
            
//             },
//             {
//               "Month": "Mar",
//               "Buffalo Exchange": itemSales[2][0].length,
//               "Buffalo ExchangeColor": "hsl(169, 70%, 50%)",
//               "The Traditional": itemSales[2][1].length,
//               "The TraditionalColor": "hsl(42, 70%, 50%)",
//               "Italiano": itemSales[2][2].length,
//               "ItalianoColor": "hsl(161, 70%, 50%)",
//               "Kimchi Tofu": itemSales[2][3].length,
//               "Kimchi TofuColor": "hsl(39, 70%, 50%)",
              
//             },
//             {
//               "Month": "Apr",
//               "Buffalo Exchange": itemSales[3][0].length,
//               "Buffalo ExchangeColor": "hsl(129, 70%, 50%)",
//               "The Traditional": itemSales[3][1].length,
//               "The TraditionalColor": "hsl(208, 70%, 50%)",
//               "Italiano": itemSales[3][2].length,
//               "ItalianoColor": "hsl(215, 70%, 50%)",
//               "Kimchi Tofu": itemSales[3][3].length,
//               "Kimchi TofuColor": "hsl(26, 70%, 50%)",
    
//             },
//             {
//               "Month": "May",
//               "Buffalo Exchange": itemSales[4][0].length,
//               "Buffalo ExchangeColor": "hsl(156, 70%, 50%)",
//               "The Traditional": itemSales[4][1].length,
//               "The TraditionalColor": "hsl(180, 70%, 50%)",
//               "Italiano": itemSales[4][2].length,
//               "ItalianoColor": "hsl(232, 70%, 50%)",
//               "Kimchi Tofu": itemSales[4][3].length,
//               "Kimchi TofuColor": "hsl(139, 70%, 50%)",
           
//             },
//             {
//               "Month": "Jun",
//               "Buffalo Exchange": itemSales[5][0].length,
//               "Buffalo ExchangeColor": "hsl(274, 70%, 50%)",
//               "The Traditional": itemSales[5][1].length,
//               "The TraditionalColor": "hsl(163, 70%, 50%)",
//               "Italiano": itemSales[5][2].length,
//               "ItalianoColor": "hsl(213, 70%, 50%)",
//               "Kimchi Tofu": itemSales[5][3].length,
//               "Kimchi TofuColor": "hsl(355, 70%, 50%)",
              
         
//             },
//             {
//               "Month": "Jul",
//               "Buffalo Exchange": itemSales[6][0].length,
//               "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
//               "The Traditional": itemSales[6][1].length,
//               "The TraditionalColor": "hsl(23, 70%, 50%)",
//               "Italiano": itemSales[6][2].length,
//               "ItalianoColor": "hsl(47, 70%, 50%)",
//               "Kimchi Tofu": itemSales[6][3].length,
//               "Kimchi TofuColor": "hsl(121, 70%, 50%)",
              
//             },
//             {
//               "Month": "Aug",
//               "Buffalo Exchange": itemSales[7][0].length,
//               "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
//               "The Traditional": itemSales[7][1].length,
//               "The TraditionalColor": "hsl(23, 70%, 50%)",
//               "Italiano": itemSales[7][2].length,
//               "ItalianoColor": "hsl(47, 70%, 50%)",
//               "Kimchi Tofu": itemSales[7][3].length,
//               "Kimchi TofuColor": "hsl(121, 70%, 50%)",
              
//             },
//             {
//               "Month": "Sep",
//               "Buffalo Exchange": itemSales[8][0].length,
//               "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
//               "The Traditional": itemSales[8][1].length,
//               "The TraditionalColor": "hsl(23, 70%, 50%)",
//               "Italiano": itemSales[8][2].length,
//               "ItalianoColor": "hsl(47, 70%, 50%)",
//               "Kimchi Tofu": itemSales[8][3].length,
//               "Kimchi TofuColor": "hsl(121, 70%, 50%)",
              
//             },
//             {
//               "Month": "Oct",
//               "Buffalo Exchange": itemSales[9][0].length,
//               "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
//               "The Traditional": itemSales[9][1].length,
//               "The TraditionalColor": "hsl(23, 70%, 50%)",
//               "Italiano": itemSales[9][2].length,
//               "ItalianoColor": "hsl(47, 70%, 50%)",
//               "Kimchi Tofu": itemSales[9][3].length,
//               "Kimchi TofuColor": "hsl(121, 70%, 50%)",
              
//             },
//             {
//               "Month": "Nov",
//               "Buffalo Exchange": itemSales[10][0].length,
//               "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
//               "The Traditional": itemSales[10][1].length,
//               "The TraditionalColor": "hsl(23, 70%, 50%)",
//               "Italiano": itemSales[10][2].length,
//               "ItalianoColor": "hsl(47, 70%, 50%)",
//               "Kimchi Tofu": itemSales[10][3].length,
//               "Kimchi TofuColor": "hsl(121, 70%, 50%)",
              
//             },
//             {
//               "Month": "Dec",
//               "Buffalo Exchange": itemSales[11][0].length,
//               "Buffalo ExchangeColor": "hsl(125, 70%, 50%)",
//               "The Traditional": itemSales[11][1].length,
//               "The TraditionalColor": "hsl(23, 70%, 50%)",
//               "Italiano": itemSales[11][2].length,
//               "ItalianoColor": "hsl(47, 70%, 50%)",
//               "Kimchi Tofu": itemSales[11][3].length,
//               "Kimchi TofuColor": "hsl(121, 70%, 50%)",
              
//             }
//           ]

//         return (
            
//             <div className="chart-container">
//                 <h2>Items by Total Sales (2019)</h2>
//                 <ResponsiveBar
//         data={data}
//         keys={[ 'Buffalo Exchange', 'The Traditional', 'Italiano', 'Kimchi Tofu' ]}
//         indexBy="Month"
//         margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//         padding={0.3}
//         colors={{ scheme: 'nivo' }}
//         defs={[
//             {
//                 id: 'dots',
//                 type: 'patternDots',
//                 background: 'inherit',
//                 color: '#38bcb2',
//                 size: 4,
//                 padding: 1,
//                 stagger: true
//             },
//             {
//                 id: 'lines',
//                 type: 'patternLines',
//                 background: 'inherit',
//                 color: '#eed312',
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10
//             }
//         ]}
//         fill={[
//             {
//                 match: {
//                     id: 'fries'
//                 },
//                 id: 'dots'
//             },
//             {
//                 match: {
//                     id: 'Italiano'
//                 },
//                 id: 'lines'
//             }
//         ]}
//         borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'Month',
//             legendPosition: 'middle',
//             legendOffset: 32
//         }}
//         axisLeft={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'Orders',
//             legendPosition: 'middle',
//             legendOffset: -40
//         }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
//         legends={[
//             {
//                 dataFrom: 'keys',
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 120,
//                 translateY: 0,
//                 itemsSpacing: 2,
//                 itemWidth: 100,
//                 itemHeight: 20,
//                 itemDirection: 'left-to-right',
//                 itemOpacity: 0.85,
//                 symbolSize: 20,
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemOpacity: 1
//                         }
//                     }
//                 ]
//             }
//         ]}
//         animate={true}
//         motionStiffness={90}
//         motionDamping={15}
//     />
//     </div>
//         )
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         setSalesByItem: (array) => {
//             dispatch({type: "SET_SALES_BY_ITEM", payload: array })
//         }
//     }
// }

// function mapStateToProps(state) {
//     return {
//         itemSales: state.itemSales
//     }
// }

export default (SalesByItemByMonthChart)
