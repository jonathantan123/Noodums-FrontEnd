import React from 'react';
import MenuCardFront from '../components/MenuCardFront';
import { connect } from "react-redux"



class MenuContainer extends React.Component {

    renderMenuCards = () => {
        return(
        this.props.items.map((item) => {
            return (<MenuCardFront item={item}/>)
        }))
    }
    

    render() {
     
        return (
            <div >
                <h1>Menu</h1>
                    <div class="menu-container">
                        <div class="ui cards">
                            {this.renderMenuCards()}
                        </div>
                </div>
           </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        menuItems: state.menuItems,
        user_id: state.user_id
    }
}


export default connect(mapStateToProps)(MenuContainer)