import "./Button.css";
function Button ({btn1, onClick }){
  return(
    <>
  <button onClick={onClick} className="home_btn1">{btn1}</button>
    </>
  )
}
export default Button;