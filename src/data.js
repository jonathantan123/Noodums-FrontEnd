import {connect} from "react-redux"

function createData(props) {


}







  
export default [
    {
      "id": "2019",
      "color": "hsl(213, 70%, 50%)",
      "data": [
        {
          "x": "Jan",
          "y": 10
        },
        {
          "x": "Feb",
          "y": 20
        },
        {
            "x": "Mar",
            "y": 25
          },
        {
            "x": "Apr",
            "y": 25
          },
        {
            "x": "May",
            "y": 25
          },
        {
            "x": "Jun",
            "y": 25
          },
        {
            "x": "Jul",
            "y": 25
          },
        {
            "x": "Aug",
            "y": 25
          },
        {
            "x": "Sep",
            "y": 25
          },
        {
            "x": "Oct",
            "y": 25
          },
        {
            "x": "Nov",
            "y": 25
          },
        {
            "x": "Dec",
            "y": 25
          }
        
      ]
    }
      ]



function mapStateToProps(state) {
    return {
        revenue: state.revenue,
        number_of_orders: state.user_id
    }
}



    
  