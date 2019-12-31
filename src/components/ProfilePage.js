
import React from 'react';
import { connect } from "react-redux"
import { Table, Button } from 'semantic-ui-react'
import EditForm from './EditForm';



class ProfilePage extends React.Component {

    state = {
        clicked: false 
    }

    toggleForm=  () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

render() {
    return(
        <React.Fragment>  
    
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'> </Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                    <h2>Name: {this.props.user_info.first_name} {this.props.user_info.last_name}  </h2>
                    <h2>Email Address: {this.props.user_info.email_address} </h2>
                    <h2>Phone Number: {this.props.user_info.phone_number} </h2>
                    <Button onClick={this.toggleForm}>Edit Info</Button>
            </Table>
            <React.Fragment>
                {this.state.clicked? 
                   <EditForm toggleForm={this.toggleForm}/>
                :
                    null
                }
            </React.Fragment>
    
    
        </React.Fragment>    
        )       
    }

}
function msp(state) {
    return (
        {
            user_info: state.user_info
        }
    )
}


export default connect(msp)( ProfilePage) 