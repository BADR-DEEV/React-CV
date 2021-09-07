import React from "react"
import "./contact.css"
import github from "../../../Images/Github.png"  
import facebook from "../../../Images/Facebook.png"
import Google from "../../../Images/Google.png"
import Phone from "../../../Images/Phone.png"


const Footer = ()=> {
    return(
      <>
      <div id = "contact">
       <h1>Contact Me</h1>
       <span id = "contacts"><img id = "phone" src = {Phone} alt = "#"/><p>Phone Number [Almadar] : 091 012 46 49</p></span>
       <br/>
       <br/>
       <span id = "contacts"><img id = "phone" src = {Phone} alt = "#"/><p>Phone Number [Libyana] : 092 732 97 87</p></span>
 

</div>

        
    <div className = "footer">

    <span id = "footer-span"> <img src = {github} alt = "#"/><a target="_blank" rel="noreferrer" href = "https://github.com/BADR-DEEV?tab=repositories">Github </a> </span> 
   <span id = "footer-span"> <img id = "F" src = {facebook} alt = "#"/><a target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=100005412978012">Facebook </a> </span> 
   <span id = "footer-span"> <img id = "G" src = {Google} alt = "#"/><a className = "ga" href="mailto:bsh20351badersh20002@gmail.com">Gmail </a> </span> 





    
    </div>
    </>
    )





}



export default Footer