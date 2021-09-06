import React from "react"
import "./about.css"
import badr from "../../../Images/Badr.jpg"

const About = ()=> {
    return(
    <div id = "About">
    <img className = "Badr" src = {badr} alt = "#">

    </img>
    <h1>
    Hello Evreyone 
    </h1>

    <p>
    Hello My name is Badr Shehim I'm 19 years old I'm a junior web developer and I'm ready to learn and do whatever it is to help out. 
    Right now I'm a Collage student at Computer engineering
  
    </p>
    </div>)


}


export default About;