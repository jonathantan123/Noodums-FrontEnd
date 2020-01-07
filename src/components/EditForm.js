import React from "react"
import { Form, Button} from 'semantic-ui-react'
import { connect } from "react-redux"




class EditForm extends React.Component{


    state = { 
        first_name: "", 
        last_name:  "", 
        phone_number: "",
        email_address: "", 
        password: "", 
        submitted: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    toggleEdit=  () => {
        this.setState({
            submitted: !this.state.submitted
        })
    }


      phoneIsValid(number) {
          return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)
      }

      submitHandler=(e) => {
        e.preventDefault()
        
        if( this.state.phone_number !== "") {
            if(this.phoneIsValid(this.state.phone_number) ){
                fetch(`http://localhost:3000/api/v1/users/${this.props.user_id}`, {
                    method: "PATCH", 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                            first_name: this.state.first_name,
                            last_name: this.state.last_name, 
                            phone_number: this.state.phone_number, 
                            email_address: this.state.email_address,
                            password: this.state.password
                        })
                })
                } else { 
                    alert("invalid phone number")
                }

          } else { 
            fetch(`http://localhost:3000/api/v1/users/${this.props.user_id}`, {
                method: "PATCH", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        email_address: this.state.email_address, 
                        password: this.state.password
                    })
            })

          }

        }

    render() {
        return (
            <React.Fragment>
                {this.props.user_id === 1 ? 
                <React.Fragment>
                    {this.state.submitted === false ?
                        <React.Fragment>

                        <Form onSubmit={this.submitHandler}>
                        <Form.Field>
                        <label>Email Address</label>
                        <input 
                            name="email_address" 
                            placeholder='Username'
                            onChange={this.changeHandler} />
                        </Form.Field>
                        <Form.Field>
                        <label>Password</label>
                        <input 
                            name="password" 
                            placeholder='Password'
                            onChange={this.changeHandler} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                </Form>
                    <Button onClick={this.toggleEdit}>Back</Button>
                    </React.Fragment>
                        :
                         null
                }
                </React.Fragment>
                     
            : 
            <React.Fragment>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field>
                            <label>First Name</label>
                            <input 
                                name="first_name"
                                placeholder='First Name'
                                onChange={this.changeHandler}
                            />
                            </Form.Field>
                            <Form.Field>
                            <label>Last Name</label>
                            <input 
                                name="last_name" 
                                placeholder='Last Name'
                                onChange={this.changeHandler} />
                            </Form.Field>
                            <Form.Field>
                            <label>Phone Number</label>
                            <input 
                                name="phone_number" 
                                placeholder='Phone Number'
                                onChange={this.changeHandler} />
                            </Form.Field>
                            <Form.Field>
                            <label>Email Address</label>
                            <input 
                                name="email_address" 
                                placeholder='Email Address'
                                onChange={this.changeHandler} />
                            </Form.Field>
                            <Form.Field>
                            <label>Password</label>
                            <input 
                                name="password" 
                                placeholder='Password'
                                onChange={this.changeHandler} />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                    </Form>
                        <Button onClick={this.props.toggleForm} type='submit'>Back</Button>
                    </React.Fragment>           
            }
            </React.Fragment>
        )}

}




function msp(state) {
    return (
        {
            user_id: state.user_id
        }
    )
}

export default connect(msp)(EditForm)


