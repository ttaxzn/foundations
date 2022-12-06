import React from "react";
import logo from "../content/logo1.mp4";


class MyVideoComponent extends React.Component {
  render() {
    return (
      <video speed="60%" autoPlay loop muted id='video' style={{color: "#FFFFFF", width: "60vw"}}>
        <source src={logo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  }
}

export default MyVideoComponent