import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Portfolio";
import OurEvents from "./pages/OurEvents";
import OtherEvents from "./pages/OtherEvents"
import SingleEvent from "./pages/SingleEvent"
// import { ParallaxProvider } from 'react-scroll-parallax'

const NavRoutes = () => (
  // <ParallaxProvider scrollAxis='vertical'>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/portfolio" element={<Porfolio/>} />
    <Route path="/our-events" element={<OurEvents/>} />
    <Route path="/other-events" element={<OtherEvents/>} />
    <Route path="/other-events/:dummyevent" element={<SingleEvent />}/>
    <Route path="/our-events/:dummyevent" element={<SingleEvent />}/>
  </Routes>
  // </ParallaxProvider>
);

export default NavRoutes;