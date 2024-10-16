import About from "./About";
import Banner from "./Banner";
import Counter from "./Counter";
import Features from "./Features";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Services from "./Services";
import Sidebar from "./Sidebar";
import Teams from "./Teams";
import Testimonials from "./Testimonials";

function Homepage() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <About/>
    <Services/>
    <Features/>
    <Projects/>
    <Counter/>
    <GetInTouch/>
    <Teams/>
    <Testimonials/>
    <Footer/> 
    </>
  );
}

export default Homepage;
