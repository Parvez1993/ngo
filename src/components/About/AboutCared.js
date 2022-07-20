import React from "react";
import "./AboutCard.css";

function AboutCared({ title, desc, image }) {
  return (
    <div className="card_animation">
      <div className="module" style={{ backgroundImage: `url(${image})` }}>
        <header>
          <h1 className="title">{title}</h1>
        </header>
      </div>
      <div className="text-center">
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}

export default AboutCared;
