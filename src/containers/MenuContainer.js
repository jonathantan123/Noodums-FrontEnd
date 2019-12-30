import React from 'react';
import MenuCardFront from '../components/MenuCardFront';
import { connect } from "react-redux"
import { Image, Reveal, Header } from 'semantic-ui-react'

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
                    <Header style={{color: "white"}}as="h1">This is Noodums</Header> 
             </div> 
        </div>
          
           <br></br><br></br>
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