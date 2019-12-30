import React from 'react';
import MenuCardFront from '../components/MenuCardFront';
import { connect } from "react-redux"
import { Card, Divider } from 'semantic-ui-react'
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';







class MenuContainer extends React.Component {

    renderMenuCards = () => {
        return(
        this.props.items.map((item) => {
            return (<MenuCardFront item={item}/>)
        }))
    }
    

    render() {
     
        return (
            <React.Fragment>
            <div class ="video_container">
            <div className="one">
              <iframe frameborder="0" className="video-background"src="https://player.vimeo.com/video/271429793?byline=0&portrait=0&autoplay=1&title=0&background=1"></iframe>
            </div>
           <div className="welcome-text">
               <h1>Noodums</h1>
             </div> 
        </div>
            <div classname="MenuContainer">
                <h1>New Items</h1>
                    <div class="menu-container">
                        <div class="ui cards">
                            {this.renderMenuCards()}
                        </div>
                </div>
           </div>
           <br></br><br></br>



           <div className= "about_us_container" >
                <div className="welcome-text">
                    <h1>About Us: </h1>
                    </div> 
                


           </div>










           </React.Fragment>
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