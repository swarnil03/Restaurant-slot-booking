import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">WE ALSO OFFER</h1>
          <p>
          Embark on a flavor-packed journey with our popular dishes! Crispy dosa, Zunka Bhakar, spicy Tarri Samosa, and fiery Saoji Chicken. Each bite is a taste of culinary excellence!
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
