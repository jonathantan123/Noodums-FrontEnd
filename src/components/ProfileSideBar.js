import React from "react";
import { Dropdown, Icon, Menu, Grid } from "semantic-ui-react";

function ProfleSideBar(props) {
  return (
    <Grid columns={3} divided>
      <Grid.Column>
        <Menu vertical left>
          <Menu.Item>
            <h1>Your Account</h1>
          </Menu.Item>
          <Dropdown item text="Profile">
            <Dropdown.Menu>
              <Dropdown.Item
                icon="user"
                text="View/Edit Profile"
                name="View/Edit Profile"
                onClick={props.setActive}
              />
              {/* <Dropdown.Item icon='edit' text='Change Username/Password' name="Change Username/Password" onClick={props.setActive} />
                        <Dropdown.Item icon='credit card' text='Add Credit Card' name="Add Credit Card"onClick={props.setActive} /> */}
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item name="Favorite" onClick={props.setActive}>
            <Icon name="heart" />
            Favorites
          </Menu.Item>

          <Menu.Item name="Past Orders" onClick={props.setActive}>
            <Icon name="history" />
            Past Orders
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
}

export default ProfleSideBar;
