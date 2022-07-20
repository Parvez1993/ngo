import React from "react";
import "./AboutCard.css";

function AboutCared({ title, desc, image }) {
  return (
    <div class="card_animation">
      <div class="module" style={{ backgroundImage: `url(${image})` }}>
        <header>
          <h1 className="title">{title}</h1>
        </header>
      </div>
      <div class="text-center">
        <p class="desc">{desc}</p>
      </div>
    </div>
  );
}

export default AboutCared;
