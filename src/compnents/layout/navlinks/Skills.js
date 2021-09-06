import React from "react"
import "./skills.css"
// import Moomken from "../../../images/Moomken.jpg"
import Moomken from "../../../Images/mcopy.jpg"
import Amad from "../../../Images/amad.jpg"


const Skills = ()=> {
    return(
        <>
        <div id = "S">
      


<div className = "card">
<h1 className = "title">Web Development</h1>
        <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">HTML5</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="90%" style = {{maxWidth : "90%"}}></div>
           </div>
       </div>
    </div>


    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">CCS3</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="80%" style = {{maxWidth : "80%"}}></div>
           </div>
       </div>
    </div>


    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">Javascript</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="75%" style = {{maxWidth : "75%"}}></div>
           </div>
       </div>
    </div>


    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">Jquery</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="60%" style = {{maxWidth : "60%"}}></div>
           </div>
       </div>
    </div>



    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">react</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="80%" style = {{maxWidth : "80%"}}></div>
           </div>
       </div>
    </div>




    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">mongo</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="70%" style = {{maxWidth : "70%"}}></div>
           </div>
       </div>
    </div>


    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">Json</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="90%" style = {{maxWidth : "90%"}}></div>
           </div>
       </div>
    </div>
 
    </div>





    <div className = "card">
<h1 className = "title">Microsoft office</h1>
        <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">Word</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="75%" style = {{maxWidth : "75%"}}></div>
           </div>
       </div>
    </div>


    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">PowerPoint</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="75%" style = {{maxWidth : "75%"}}></div>
           </div>
       </div>
    </div>


    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">Excel</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="75%" style = {{maxWidth : "75%"}}></div>
           </div>
       </div>
    </div>
</div>









<div className = "card">
<h1 className = "title">Languages</h1>
        <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">English</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="90%" style = {{maxWidth : "90%"}}></div>
           </div>
       </div>
    </div>


    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">German</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="30%" style = {{maxWidth : "30%"}}></div>
           </div>
       </div>
    </div>

 
    <div className = "skills"> 
         <div className = "skill">

           <div className = "skill-name">Standard Arabic</div>
           <div className = "skill-bar">
               <div className = "skill-per" per ="60%" style = {{maxWidth : "65%"}}></div>
           </div>
       </div>
    </div>



 
</div>


</div>








<div className = "experience">

<hr className = "hr">

</hr>
<h1 className = "title">Work Experience and Certifications</h1>



<img src = {Moomken} alt = "#" className = "Mommken"></img>
<p className = "text-image">I have worked as an IT Support at Moomken</p>












<hr className = "hr">

</hr>
{/* <h1 className = "title">Work Experience and Certifications</h1> */}



<img src = {Amad} alt = "#"  className = "Mommken"></img>
<p className  = "text-image">I have taken a course at Amadeus Reservations System </p>

<hr className = "hr1">

</hr>
 





</div>








</>


    )

}



export default Skills