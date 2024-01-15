import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
        <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Poha </h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Paradise </h1>
                <h1 className="title dishes_title">Dishes</h1>
              </div>
              {/* <img src="/logo.svg" alt="logo" className="logo" /> */}
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.jpg" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Awaits</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
