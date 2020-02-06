import React from 'react';
import { Card, Icon, Button, Menu, Modal, Header } from 'semantic-ui-react'
import { connect } from "react-redux"
import Dinero from 'dinero.js'

class  MenuBackCard extends React.Component {

    state = {
        show: false 
    }

    clickHandler= () => {
        this.setState({
            show: !this.state.show
        })
    }
    
 
    addToCart = () => {
        
        this.props.addToCart(this.props.item.id)
        this.props.clickHandler()
        
    }
    
    formatPrice = () => {
        let price = Dinero({amount: this.props.item.price})
        return price.toFormat(`$0.00`) 
    }
      
render () {

    return (
        <Card>
            <Card.Content onClick={this.props.clickHandler}>
    <Card.Header  textAlign='center'>{this.props.item.name}</Card.Header>
                <Card.Description >
                    {this.props.item.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                      <Menu secondary icon>
                        <Menu.Item 
                        name='Price'
                        >
                        {this.formatPrice()}
                        </Menu.Item>

                        <Menu.Item 
                        name='shopping cart'
                        position='right'
                        >
                            <Modal trigger={<Button 
                                            onClick={this.clickHandler}
                                            animated='fade'>
                                            <Button.Content hidden>Add</Button.Content>
                                            <Button.Content visible>
                                             <Icon name='cart plus' />
                                            </Button.Content>
                                            </Button>} basic size='small'>
                                <Header icon='cart plus' content='Add to Cart' />
                                <Modal.Content>
                                <p>
                                    Would you like to add this item to your cart? 
                                </p>
                                </Modal.Content>
                                <Modal.Actions>
                                <Button color='green' inverted
                                onClick={this.addToCart}>
                                    <Icon name='checkmark' /> Yes!
                                </Button>
                                </Modal.Actions>
                            </Modal>
                        </Menu.Item>
                      </Menu>

                 </Card.Content>
        </Card>
        )
}
  
    }

    function mapDispatchToProps(dispatch) {  
        return { 
            addToCart: (id)=> {
                dispatch({type: "ADD_TO_CART", payload: id })
            }
        }
    }

  export default connect(null,mapDispatchToProps) (MenuBackCard) 