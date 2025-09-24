import React from "react";
import FruviaNavbar from "./Navbar";  
import Hero from "./Hero";
import Products from "./ProductCard";
import Testimonials from "./Testimonials";
import BookEvent from "./BookEvent";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";


function App() {
  return (
    <>
      <FruviaNavbar />
       <Hero />
        <About/>
       <Products/>
       <Testimonials/>
       <BookEvent /> 
        <Contact />
      <div style={{ padding: "2rem" }}>
        <h1>Welcome to Fruvia 🍹</h1>
        <p>Natural fruit juices for events, birthdays, and celebrations.</p>
      </div>
        <Footer/>

    </>
  );
}

export default App;



