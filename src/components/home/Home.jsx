import Button from "../button/Button";
import "./Home.css";
// import myImage from "./myImage.jpg";
import { openResume } from "../resume_func/Resume_func";


function Home (){
 
  const openSkills = ()=>{
    window.open()
  }
  return(
    <>
      <section className="home_section">
    <div className="myInfo">
    <h3>HELLO!</h3>
      <h1>I'M <span className="highlight">Hritik Raghuwanshi</span></h1>
  
    <h3>Front End Devopler</h3>
      <div className="home_btn">
    <Button 
      btn1={"Resume"}
      onClick={openResume} 
      />
    <Button
       btn1={"My Skills"}
       onClick={openSkills}
      />
 
    
      </div>
    </div>
    <div className="img_div">
    <img 
      className="myImage"
src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7597.jpg?w=740" alt="Description of image" />
    </div>
      </section>
    </>
  )
}
export default Home;