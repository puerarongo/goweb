import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
import Blog from "./blog/Blog";
import Team from "./team/Team";
import Form from "./form/Form";
import Footer from "./footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Blog />
      <Team />
      <Form />
      <Footer />
    </>
  );
};

export default App;
