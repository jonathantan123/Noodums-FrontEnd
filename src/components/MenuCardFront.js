import React from 'react';
import MenuBackCard from './MenuBackCard';
import { Card, Image } from 'semantic-ui-react'


class MenuCardFront extends React.Component{

    state = {
        clicked: false 
    }

    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })

    }

 
    render() {
        return (
            <React.Fragment>
            {
            this.state.clicked? 
                <MenuBackCard clickHandler={this.clickHandler} item={this.props.item}/>
            :
            <Card>
                
            <Image  onClick={this.clickHandler} src={`${this.props.item.image}`} wrapped ui={true} />
            </Card>
        }
            </React.Fragment>
        )
    }

}


  export default MenuCardFront 