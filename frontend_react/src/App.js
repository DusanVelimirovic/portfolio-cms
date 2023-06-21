import React from "react";

// Import App styles
import "./App.scss";

// Import containers modules
// Container modules contain other containers
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

// Import Components
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
