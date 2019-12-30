
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import Moment from 'react-moment';



class  PastOrder extends React.Component{

    state = {
        clicked: false, 
        items: []
    }


/// fetch details for individual order 
clickHandler = () => {

    fetch(`http://localhost:3000/api/v1/orders/${this.props.order.id}`)
    .then(resp => resp.json()) 
    .then((data) => {
        
        this.setState({
            items: data.data.attributes.items,
            clicked: !this.state.clicked
        })
    })
   


}



render () {
    let dateToFormat = this.props.order.created_at

    return(
        <React.Fragment>
        {this.state.clicked?    
            <h1>sdfsdfsdfsd</h1>
            
                :
                <React.Fragment>  
                    <Moment format="LLLL">{dateToFormat}</Moment>
                    <Button onClick={this.clickHandler}>View Order</Button>
                </React.Fragment>
        
        }
        </React.Fragment>
        
    )
    
}
}



export default (PastOrder) 