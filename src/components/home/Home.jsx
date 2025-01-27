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
src="https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png" alt="Description of image" />
    </div>
      </section>
    </>
  )
}
export default Home;