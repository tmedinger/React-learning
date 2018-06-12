import React, { Component } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Dashboard = (props) => {
    return (
        <div>
            <Nav emailValueFromApp={props.emailValueFromApp}/>
            Dashboard Component
            <Footer />
        </div>
    )
}

export default Dashboard;