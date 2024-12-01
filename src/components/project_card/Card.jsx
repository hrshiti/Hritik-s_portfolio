import Button from "../button/Button";
import "./Card.css";

function Card({title,discription,image}){
  return(
    <>
   <div className="main_card">
   <div className="card_img">
     <img className="food_Image" src={image} alt={title} />"
       {/* <img 
           className="food_Image"
     src="https://downloadpsd.cc/wp-content/uploads/Online-Food-Delivery-Website-Template-Free-PSD.jpg" /> */}
   </div>
   <div className="card_description">
   <h3>{title}</h3>
     <p>{discription}</p>
     <Button 
       btn1={"View"}
       />
   </div>
   </div>
    </>
  )
}
export default Card;