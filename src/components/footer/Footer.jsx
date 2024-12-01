import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer_section">
        <div className="footer_logoes">
          <ul><li><img src="https://cdn-icons-png.flaticon.com/128/2626/2626270.png" alt="instagram logo" /></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook logo" /></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="twitter logo" /></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" alt="git hub" /></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="youtube" /></li></ul>

        </div>
        <div className="footer_navlinks">
          <ul> <li> <a href="#home" >Home</a></li>
            <li><a href="#project" >Projects</a></li>
            <li><a href="#skill" >Skills</a></li>
            <li><a href="https://drive.google.com/file/d/1niN4I46xG9kAh1Td7xBqHGBxlL57cU4y/view?usp=drivesdk" >Resume</a></li>
            <li><a href="#contact" >Contact</a></li></ul>
        </div>
        <div className='copyright'>Copyright @2024; Designed by HRITIK </div>
      </section>
    </>
  )
}
export default Footer;