import "./Skills.css";

function Skills(){
  return(
    <>
   <section id="skill" className="skills_section">
   <div className="skills_heading">
 <h1>SKILLS</h1>
   </div>
     <div className="skills">
     <div className="skills_logo">

     <div className="logo">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" ><img  src="https://cdn-icons-png.flaticon.com/128/17486/17486586.png" alt="html image" /></a>
     
     </div>
       <div className="logo">
       <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="html image"/></a>
      
     </div>
    
       <div className="logo">
       <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://cdn-icons-png.flaticon.com/128/15484/15484303.png" alt="html image"/></a>
      
     </div>
     
       </div>

       <div className="skills_logo">
         <div className="logo">
       <a href="https://react.dev/"><img src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="html image"/></a>
    
     </div>
         <div className="logo">
       <a href="https://github.com/"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494748.png" alt="html image"/></a>
      
     </div>
         {/* </div> */}
         </div>
       </div>
   </section>
    </>
  )
}
export default Skills;