import React, { Component } from 'react';
import './App.css';
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false,
      usersEmail: "look something is written here!"

    }
  }

  userDetails = (valueFromChildComponent) => {
    this.setState({usersEmail: valueFromChildComponent.email})
  }

  changeUserStatus = ()  => {
    this.setState({ isUser: !this.state.isUser })
  }

  checkUser = () => {
    if (this.state.isUser){
      return (
        <LoginForm userFunctionFromApp = {this.userDetails}/>
      )
    } else {
      return( 
        <RegisterForm userFunctionFromApp = {this.userDetails}/>
      )
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {this.checkUser()}
            </Route>
            <Route exact path="/dashboard">
              <Dashboard emailValueFromApp={this.state.usersEmail}/>
            </Route>
          </Switch>
          
          <button onClick={this.changeUserStatus}>Switch</button>
        </div>
      </Router>
    );
  }
}

export default App;
