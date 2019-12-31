import React from "react"
import { Item, Button } from 'semantic-ui-react'
import { connect } from "react-redux"



function Receipt (props) {

    debugger

    let findQuantity = () => {

        let item =  props.data.order_items.find(o => o.item_id === props.item.id )

        return item.quantity
    }

    let renderButton = () => { 
        
       
       let item = props.favorites.find(fave => fave.id === props.item.id) 
       debugger

       if (item) {
           return null 
       } else { 
        return <Button onClick={addToFaves}>Add to Favorites</Button>
       }

 


    }


    let addToFaves = () => {

        fetch(`http://localhost:3000/api/v1/favorites`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    item_id: props.item.id, 
                    user_id: props.user_id
                })
        })
            .then(resp => resp.json())
            .then((data) => {
                
               let item =  props.menuItems.find(item => item.id === data.item_id )
               

               props.addToFavorites(item)
                console.log(data)
            })

         
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
            {renderButton()}
    </React.Fragment>
      )
}

function msp(state) {
    return {
        user_id: state.user_id, 
        menuItems: state.menuItems, 
        favorites: state.favorites

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFavorites: (item) => {
            dispatch({type: "ADD_TO_FAVORITES", payload: item })
        },
       
    }
}




export default connect(msp, mapDispatchToProps)(Receipt)  

