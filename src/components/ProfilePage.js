
import React from 'react';
import { connect } from "react-redux"
import { Table, Button } from 'semantic-ui-react'
import EditForm from './EditForm';



function ProfilePage (props) {

return(
    <React.Fragment>  

        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan='3'> </Table.HeaderCell>
            </Table.Row>
            </Table.Header>
                <h2>Name: {props.user_info.first_name} {props.user_info.last_name}  </h2>
                <h2>Email Address: {props.user_info.email_address} </h2>
                <h2>Phone Number: {props.user_info.phone_number} </h2>
                <Button>Edit Info</Button>
        </Table>

        <EditForm/>

    </React.Fragment>    
    )
    
}
function msp(state) {
    return (
        {
            user_info: state.user_info
        }
    )
}


export default connect(msp)( ProfilePage) 