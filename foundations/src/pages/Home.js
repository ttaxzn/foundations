import {Link} from "react-router-dom";
import logo from "../content/foundlogo1.svg"
import OFlogo from "../content/OFlogo.png"
import './Home.css'

function Home(){
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
        <div class="sec1Container">
        <img src={logo} alt="logo" class="img"/>
        </div>
        <div class="sec1ContentContainer">
        <img src={OFlogo} alt="OF" class="OF"/>
        <div class="sec1Content">
        Foundations Modeling is an efficient and effective organization that produces top level OnlyFans growth.
        Our success starts from monetization and social media strategies that we have uncovered through our experience.
        </div>
        </div>
        <div class="webContainer">
        </div>
    </>
    )
}

export default Home;