import Button from "../button/Button";
import "./Home.css";
// import myImage from "./myImage.jpg";



function Home (){
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1niN4I46xG9kAh1Td7xBqHGBxlL57cU4y/view?usp=drivesdk", "_blank"); 
  };
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
src="https://c.pxhere.com/photos/13/d9/portrait_people_man_eyes_face_fort_dark_black_and_white-1385735.jpg!d" alt="Description of image" />
    </div>
      </section>
    </>
  )
}
export default Home;