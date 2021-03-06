import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Particles
     className="particles"
     params={{
       particles: {
         number: {
           value:30,
           density: {
             enable: true, 
             value_area: 900
           }
         },
         shape: {
           type:"circle",
           stroke: {
            width: 6,
            color: "#f9ab00"
           }
         }
       }
     }}/>
     <Navbar/>
     <Header/>
     <AboutMe/>
     <Portfolio/>
     <ContactMe/>
     <Footer/>
   </>
  );
}

export default App;
