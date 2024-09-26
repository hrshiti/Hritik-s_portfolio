import "./Footer.css"; 
import FormFooter from "./FormFooter";
const Footer = () =>{
  return(
    <>
      <div className="footer">
    <div className="footer_component">
    <h1>Hours Of Operation</h1>
      <p>MON-FRI</p>
      <p>10:00pm - 01:00pm</p>
      <p className="paraUnderline">4:00pm - 10:30pm</p>
      <p className="saturday">SAT</p>
      <p className=" saturday-time paraUnderline">10:00pm - 01:00pm</p>
      <p>SUN</p>
      <p>WE are Closed</p>
      <button className="reservation_btn">MAKE A RESERVATION</button>
    </div>
    {/* <div className="footer_component">
    <h1>Drop Us a Line</h1>
    </div> */}
        <FormFooter />
      </div>
    </>
  )
}
export default Footer;