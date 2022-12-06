import React from "react";
import "./video1.css"
import logo from "../content/logo1.mp4";


class MyVideoComponent extends React.Component {
  render() {
    return (
      <video speed="60%" playsInline autoPlay loop muted id='video' /*style={{color: "#FFFFFF", width: "60vw"}}*/ class="video1">
        <source src={logo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  }
}

export default MyVideoComponent