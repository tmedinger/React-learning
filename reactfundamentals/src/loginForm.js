import React, { Component } from "react"

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            password: ""
        };
    }
    handleChange = (e) =>{
        console.log(this.state);
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Login To The Matrix</h1> 
                <br></br>          
                <form>
                    <input type="text" name="loginID" onChange={this.handleChange}></input>
                    <br/>
                    <br/>
                    <input type="text" name="password" ></input>
                    <br/>
                    <br/>
                    <button type="submit" value="Submit">Login</button>
                </form> 
            </div>
        )
    }
}

export default LoginForm;