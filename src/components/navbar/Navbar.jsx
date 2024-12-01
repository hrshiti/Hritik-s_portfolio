import Home from "../home/Home";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div id="home" className="body_div">
    
      <section className="nav_Section">
        <div className="Logo">
          <h1>Hritik's <span>Portfolio</span></h1>
        </div>
        <div class="hamburger" onclick="toggleMenu()">
    <img src="https://cdn-icons-png.flaticon.com/128/9073/9073147.png" alt="menu_img" />
  </div>
        <div className="navLinks">
          <ul  id="navMenu">
            <li> <a href="#home" >Home</a></li>
            <li><a href="#project" >Projects</a></li>
            <li><a href="#skill" >Skills</a></li>
            <li><a href="https://drive.google.com/file/d/1niN4I46xG9kAh1Td7xBqHGBxlL57cU4y/view?usp=drivesdk" >Resume</a></li>
            <li><a href="#contact" >Contact</a></li>
          </ul>
        </div>
      </section>
        <Home />
        </div>
    </>
  );
}
export default Navbar;
