import React , { Component } from 'react';
import { Link } from "react-router-dom";

class LoginForm extends Component {
    constructor () {
        super(); 
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (e) => {
        this.props.userFunctionFromApp(this.state);
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <form>
                    <div className="input-group">
                        <br />
                        <input type="text" id="emailField" name="email" className="input-field" placeholder="Email" onChange ={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <br />   
                        <input type="password" id="passwordField" name="password" className="input-field" placeholder="Password" onChange ={this.handleChange} />
                    </div>
                    <br />
                    <button>
                        <Link to="/dashboard">Submit</Link>
                    </button>
                    {/* <input type="button" value="Submit"/> */}
                </form>   
            </div>
        )    
    }
}

export default LoginForm;