import React from "react"
import { Item, Button } from 'semantic-ui-react'



function Receipt (props) {

    debugger
    console.log("hi")


    let findQuantity = () => {

        let item =  props.data.order_items.find(o => o.item_id === props.item.id )

        return item.quantity
    }


   

return ( 
    <React.Fragment>
        <Item.Group>
        <Item>
        <Item.Image size='small' src={`${props.item.image}`} />
        <Item.Content>
        <Item.Header> {props.item.name}</Item.Header>
    <Item.Meta></Item.Meta>
            <Item.Description>
            Quantity X {findQuantity()}
            <br></br>
            Price: {props.item.price}
            </Item.Description>
    <Item.Extra>{props.item.description}</Item.Extra>
        </Item.Content>
        </Item>
        </Item.Group>

        <Button>Back</Button>
    </React.Fragment>
      )
}

export default Receipt 

