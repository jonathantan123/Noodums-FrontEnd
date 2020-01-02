import React from "react"
import { Dropdown, Icon, Menu, Grid } from 'semantic-ui-react'



function AdminSideBar (props) {


return ( 
    <Grid columns={3} divided>
         <Grid.Column>
            <Menu vertical left>
                <Menu.Item>
                <h1>Admin Account</h1> 
                </Menu.Item>
                    <Dropdown item text='Analytics'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='money bill alternate' text='Monthly Revenue' name="Monthly Revenue" onClick={props.setActive}/>
                        <Dropdown.Item icon='shopping basket' text='Monthly Orders' name="Monthly Orders" onClick={props.setActive} />
                        <Dropdown.Item icon='shopping basket' text="Total Sales by Item" name="Total Sales by Item" onClick={props.setActive} />
                    </Dropdown.Menu>
                    </Dropdown>
                    
                <Menu.Item
                name="Edit Credentials"
                onClick={props.setActive}
                >
                <Icon name='vcard' />
                Edit Credentials
                </Menu.Item>

            </Menu>
      </Grid.Column>
    </Grid>
      )
}

export default AdminSideBar 

