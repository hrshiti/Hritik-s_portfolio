import Button from "../button/Button";
import "./Form1.css";

const Form1 =()=>{
  return(
    <>
     <section className="form_section">
      <form 
       action="https://formspree.io/f/xbljqyoy"
  method="POST"
      >


      <div >
        <input className="input1"
        type="text"
        name="text"
        placeholder="Name"
        required

        />
      </div>

      <div className="input2_css" >
      <input className="input2"
        type="email"
        name="email"
        placeholder="email"
        required

        />
      </div>
      <div >
      <input className="input3"
        type="text"
        name="meswsage"
        placeholder="Your message"
        required

        />
      </div>
      <div className="input_btn">
        <Button 
        
        btn1="Submit"
         className="inputBtn"/>
      </div>
      </form>
     </section>
    </>
  )
}
export default Form1;