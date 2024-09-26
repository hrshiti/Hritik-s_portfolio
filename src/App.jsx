import "./App.css";
import Home from "./components/homePage/Home";
import Nav from "./components/navbar/Nav";
import About  from "./components/about/About";  
import Footer from "./footer/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Footer />
    </>
  );
}
