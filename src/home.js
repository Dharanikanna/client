import React, { Component } from "react";
import "./index.css"
import ReactPlayer  from "react-player";

class Layout extends Component{




  render() {
    return (
    <div>
    <div className="container">
        <p>Welcome to India</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=35npVaFGHMY" />
    </div>
    </div>
  )
};
}

export default Layout;