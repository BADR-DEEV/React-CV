import React from "react" 
import {Link} from "react-scroll"
 import "./navStyles.css"
 

 



const Nav = ()=> {



    return(
        <>
    <nav className = "nav">

    <ul>
        <li>
        <Link to = "Home">Home</Link>
        </li>

        <li>
           <Link to = "About">About</Link>
        </li>

        <li>
        <Link to = "S">Skills</Link>
        </li>


        <li>
        <Link to = "contact">Contact</Link>

        </li>

        </ul>
       
    



    </nav>
   </>
    )





}


export default Nav;