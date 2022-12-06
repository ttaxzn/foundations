import React from "react";
import MyVideoComponent from "../components/video1";
import {Link} from "react-router-dom";
import './Enter.css'

function Enter(){
    return(
        <>
        <div class="webContainer">
    <div class="enter">
      <MyVideoComponent className="video"/>
      <div class="btnContainer">
        <div class="enterBtn hover-underline-animation">
           <Link to="/home">Enter</Link>
        </div>
      </div>
    </div>

   </div>
    </>
    )
}

export default Enter;