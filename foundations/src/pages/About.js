import { Link } from "react-router-dom";
import "./About.css";
import icon1 from "../content/social-media.png";
import icon2 from "../content/chatting.png";
import icon3 from "../content/editing.png";


function About() {
  return (
    <>
      <nav class="navContainer">
        <div class="text">
          <div class="nav hover-underline-animation">
            <Link to="/home">Home</Link>
          </div>
          <div class="nav hover-underline-animation">
            <Link to="/about">About</Link>
          </div>
          <div class="nav hover-underline-animation">
            <Link to="/work">Work</Link>
          </div>
        </div>
      </nav>
      <div class="text1Container">
        <div class="text1">What We Do</div>
      </div>
      <div class="wrapper">
      <div class="boxContainer">
        <div class="box1Container">
          <div class="box1">Social Media</div>
          <div>
            <img src={icon1} class="icon1" />
          </div>
        </div>
        <div class="box2Container">
          <div class="box2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            aenean pharetra magna ac placerat vestibulum lectus mauris. Et
            tortor consequat id porta nibh venenatis cras. Penatibus et magnis
            dis parturient montes nascetur. Lectus mauris ultrices eros in. A
            pellentesque sit amet porttitor eget dolor morbi non arcu.
          </div>
        </div>
      </div>

      <div class="boxContainer">
        <div class="box1Container">
          <div class="box1">Messaging</div>
          <div>
            <img src={icon2} class="icon2" />
          </div>
        </div>
        <div class="box2Container">
          <div class="box2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            aenean pharetra magna ac placerat vestibulum lectus mauris. Et
            tortor consequat id porta nibh venenatis cras. Penatibus et magnis
            dis parturient montes nascetur. Lectus mauris ultrices eros in. A
            pellentesque sit amet porttitor eget dolor morbi non arcu.
          </div>
        </div>
      </div>
      </div>

      <div class="wrapper">
      <div class="boxContainer">
        <div class="box1Container">
          <div class="box1">Editing</div>
          <div>
            <img src={icon3} class="icon1" />
          </div>
        </div>
        <div class="box2Container">
          <div class="box2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            aenean pharetra magna ac placerat vestibulum lectus mauris. Et
            tortor consequat id porta nibh venenatis cras. Penatibus et magnis
            dis parturient montes nascetur. Lectus mauris ultrices eros in. A
            pellentesque sit amet porttitor eget dolor morbi non arcu.
          </div>
        </div>
      </div>

      <div class="boxContainer">
        <div class="box1Container">
          <div class="box1">Lorem Ipsum</div>
          <div>
            <img src={icon1} class="icon1" />
          </div>
        </div>
        <div class="box2Container">
          <div class="box2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            aenean pharetra magna ac placerat vestibulum lectus mauris. Et
            tortor consequat id porta nibh venenatis cras. Penatibus et magnis
            dis parturient montes nascetur. Lectus mauris ultrices eros in. A
            pellentesque sit amet porttitor eget dolor morbi non arcu.
          </div>
        </div>
      </div>
      </div>
      <div class="webContainer2"></div>
    </>
  );
}

export default About;
