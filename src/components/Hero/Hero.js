import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        {/* Eksempel "Skisenter" */}
        <h1 className="hero-title text-shadow">
          Velkommen til NorLab Skisenter
        </h1>
        <p className="hero-subtitle text-shadow">
          Oppdag våre fantastiske tilbud og tjenester
        </p>
        <button
          className="cta-button"
          onClick={() =>
            document
              .getElementById("order-form")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Bestill nå
        </button>
      </div>
    </div>
  );
};

export default Hero;
