
import React, { Component } from 'react';
import { Button, List, Grid } from 'semantic-ui-react'
import Moment from 'react-moment';
import Order from './Order';
import Receipt from './Receipt';
import Dinero from 'dinero.js'


class  PastOrderFront extends React.Component{

    state = {
        clicked: false, 
        data: [], 
        total: "" , 
        subtotal: ""
    }

/// fetch details for individual order 

toggleClick = () => {

     this.setState({
            clicked: !this.state.clicked,
     })
}

clickHandler = () => {

    fetch(`http://localhost:3000/api/v1/orders/${this.props.order.id}`)
    .then(resp => resp.json()) 
    .then((data) => {
        this.setState({
            data: data.data.attributes,
            clicked: !this.state.clicked,
            total: Dinero({amount: data.data.attributes.total_price}).toFormat('$0.00'),
            subtotal: Dinero({amount: data.data.attributes.subtotal}).toFormat('$0.00')
        })
    })
}

renderPastOrders = () => {
    return (
        this.state.data.items.map((item) => {
            return (<Receipt item={item} data={this.state.data}/>)
        })
    )
}

render () {
    let dateToFormat = this.props.order.created_at

    return(
        <React.Fragment>
        {this.state.clicked? 

        <React.Fragment>
          {this.renderPastOrders()}
          <h3>Subtotal: {this.state.subtotal}  </h3>
          <h3>Total: {this.state.total}   </h3>
        <Button onClick={this.toggleClick}>Back</Button>
        </React.Fragment>  
                :
                <List.Item>
                    <List.Content>
                        <List.Header>
                            <Moment format="LLLL">{dateToFormat}</Moment>
                        </List.Header>
                            <Grid>
                                <Grid.Row centered>
                                <Button onClick={this.clickHandler}>View Order</Button>
                                </Grid.Row>
                            </Grid>
                    </List.Content>
                </List.Item>
                    
        }
        </React.Fragment>
        
    )  
}
}

export default (PastOrderFront) 