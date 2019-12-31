import React from 'react';
import MenuCardFront from '../components/MenuCardFront';
import { connect } from "react-redux"
        
import { CardGroup } from 'semantic-ui-react'





class MenuPage extends React.Component {

    renderMenuCards = () => {
        return(
        this.props.menuItems.map((item) => {
            return (<MenuCardFront item={item}/>)
        }))
    }




    render() { 
        return (
            <React.Fragment>

            <div className="menu-image-container">
                <h1>Winter Menu</h1>
            </div>

            <div className="main-menu-container">
                <h2>Dumplings</h2>
                    <div className="item-container">
                        <CardGroup  itemsPerRow={4}>
                        {this.renderMenuCards()}
                        {this.renderMenuCards()}
                        </CardGroup>

                    </div>
            </div>

            <div className="noodles-image-container"></div>


            <div className="main-menu-container">
                    <h2>Noodles</h2>
                    <div className="item-container">
                        <CardGroup  itemsPerRow={4}>
                        {this.renderMenuCards()}
                        {this.renderMenuCards()}
                        </CardGroup>

                    </div>
            </div>



            </React.Fragment>
        )
    }

}


function mapStateToProps(state) {
    return {
        menuItems: state.menuItems
    }
}

        




export default  connect(mapStateToProps)(MenuPage)