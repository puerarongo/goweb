import React from "react";
import Hero from "./hero/Hero";
import Information from "./information/Information";
import Gallery from "./gallery/Gallery";
import Blog from "./blog/Blog";
// import Team from "./team/Team";
import Form from "./form/Form";
import Footer from "./footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Information />
      <Gallery />
      <Blog />
      <Form />
      <Footer />
    </>
  );
};

export default App;
