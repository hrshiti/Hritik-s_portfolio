import "./App.css";
import Contact_form from "./components/contact_form/Contact_form";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";


export default function App() {
  return (
    <>
  <Navbar />
      <Skills />
    <Project />
      <Contact_form />
      <Footer />
    </>
  );
}
