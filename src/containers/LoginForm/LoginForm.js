import React from 'react';
import axios from 'axios';
import Form from '../../components/Form/Form';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // -- start of form 
            userForm: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'eg., somebody@email.com'
                    },
                    value: '',
                    label: 'Email'
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'eg., sp@c3ships arE cool'
                    },
                    value: '',
                    label:'Password',
                },
            // -- end of form
            }
        }
    }

    inputChangedHandler = (event, identifier) => {
        const updatedUserForm = {
            ...this.state.userForm
        };
        const updatedUserFormElement = {
            ...updatedUserForm[identifier]
        }
        updatedUserFormElement.value = event.target.value
        updatedUserForm[identifier] = updatedUserFormElement
        this.setState({
            userForm: updatedUserForm
        });
    }

    submitHandler = (event, identifier) => {
        event.preventDefault();
        let userCredentials = {}
        userCredentials["email"] = this.state.userForm.email.value;
        userCredentials["password"] = this.state.userForm.password.value;
        console.log(userCredentials);
        axios.post('http://localhost:3000/api/user/login/',{"user": userCredentials})
            .then(response => {
                alert("response");
            })
            .catch(error => {
                alert("error");
            })
    }

    render() {
        return <Form form={this.state.userForm} class={"userForm"} buttonHandler={this.submitHandler} inputHandler={this.inputChangedHandler}/>
    }
}

export default LoginForm;