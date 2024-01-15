import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is extra rassa.</p>
          </div>
          <p className="mid" style={{textAlign: "justify"}}>
            Welcome to Poha King: the reigning champion of Poha in Nagpur!
            Nestled in the heart of this vibrant city. <br /> <br />
            At Poha King, we take pride in crafting the iconic Tarri Poha, a
            special dish that captures the essence of Nagpur's unique flavors.
            Our Tarri Poha is a symphony of textures and tastes, featuring
            perfectly cooked Poha, hearty Chana, a generous serving of spicy
            tangy Rassa, freshly cut tomato wedges, crisp onions, and a sprinkle
            of crispy corn flakes. Each bite is a journey through the rich
            culinary heritage of Nagpur. <br /><br />Established as a culinary landmark,
            Poha King has become the go-to destination for Poha enthusiasts and
            food lovers alike. Our commitment to quality, authenticity, and
            innovation has earned us a special place in the hearts of Nagpur's
            residents and visitors.
          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
