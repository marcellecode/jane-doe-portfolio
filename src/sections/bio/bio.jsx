import React from "react";
import "./bio.scss";
import janeImage from "../../assets/bailey-burton-WUOme0jyBGs-unsplash.jpg"

export default function Bio() {
  return (
    <div className="bio-container" id="bio">
      <div className="bio-text">
        <h1>Jane Doe</h1>
        <p>
          Aqui, palavras e vozes tecem juntas histórias inspiradoras, dicas
          práticas e reflexões profundas que iluminam o dia a dia e alimentam a
          alma.
        </p>
      </div>
      <div className="bio-image">
        <img src={janeImage} alt="Jane Profile Image" />
      </div>
    </div>
  );
}
