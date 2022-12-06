import {Link} from "react-router-dom";

function About(){
    return(
      <>
      <nav class="navContainer">
      <div class="text">
      <div class="nav hover-underline-animation">
      <Link to='/home'>Home</Link>
     </div>
      <div class="nav hover-underline-animation">
  <Link to ='/about'>About</Link>
     </div>
     <div class="nav hover-underline-animation">
      <Link to='/work'>Work</Link>
     </div>
     </div>
     </nav>

 
  </>
    )
}

export default About;