import React from "react"
import Hero from "./navlinks/Hero.js"
import Nav from "../navbar/navbar.js"
import About from "./navlinks/About.js"
import Skills from "./navlinks/Skills"
import Footer from "./navlinks/contact"


const Homepage = ()=> {

    return (
        <div>
       <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Footer/>
     
        
 
    </div>
    )



}

export default Homepage;