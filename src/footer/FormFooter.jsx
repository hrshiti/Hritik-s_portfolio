import "./FormFooter.css";

const FormFooter =()=>{
  return(
    <div className="footerForm">
    <h1>Drop us A Line</h1>
      <p>Don't be shy, let us know you have a questions</p>
      <button className="FormBtn">Contact us</button>
      <h1>Our Newsletter</h1>
      <p>Sign up for our newsletter to get the latest news and updates</p>
      <form className="form">
        <input type="name" placeholder=" name"></input>
        <input type="last name" placeholder="last name"></input>
        <input type="email" placeholder="Enter your email"></input>
        <button className="FormBtn">Contact us</button>
      </form>
    </div>
  )
}
export default FormFooter;