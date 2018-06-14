import React, { Component } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
            let url = "https://jsonplaceholder.typicode.com/users"
            fetch(url)
              .then(response => response.json()) 
              .then(users => this.setState({users: users}))
    }

    showUsersData = () => {
        return this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <h3>{user.name}</h3>
                    Email: {user.email}
                </div>
            )
        })
    }

    render(){
        return (
            <div>
                <Nav emailValueFromApp={this.props.emailValueFromApp}/>
                
                Dashboard Component
                {this.showUsersData()}

                <Footer />
            </div>
        )
    }
}

export default Dashboard;
