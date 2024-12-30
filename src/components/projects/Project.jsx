import Card from "../project_card/Card";
import "./Project.css";

function Project() {
  return (
    <>
      <section id="project" className="card_section">

        <div className="card_heading">
          <h1>Project</h1>
        </div>
        <div className="project_section">
          <Card
            image={"https://unblast.com/wp-content/uploads/2020/09/Portfolio-Web-Design-Template-1.jpg"}
            title={"Portfolio"}
            discription={"This is a portfolio website"}
            link={"hritikportfoliowebsite.netlify.app"}
          />
          <Card
            image={"https://downloadpsd.cc/wp-content/uploads/Online-Food-Delivery-Website-Template-Free-PSD.jpg"}
            title={"Food Delivery"}
            discription={"This is a food delivery website"}
          />
          <Card
            image={"https://uicookies.com/wp-content/uploads/2018/03/academics-html-education-website-template.jpg"}
            title={"Education"}
            discription={"This is a educational website"}
          />
        </div>
        <div className="project_section">
          <Card
            image={"https://tse1.mm.bing.net/th?id=OIP.stWb8TYEx1PwNzhlOalVRQHaDv&pid=Api&P=0&h=180"}
            title={"GYM trainy"}
            discription={"This is a gym trainy website"}
          />
          <Card
            image={"https://tse4.mm.bing.net/th?id=OIP.aAE_C6i2T1JhPGGOLUFRagAAAA&pid=Api&P=0&h=180"}
            title={"Home Designs"}
            discription={"This is a Home designs website"}
          />

        </div>
      </section>
    </>
  )
}
export default Project;