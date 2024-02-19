import React from "react";
import "./portfolio.scss";
import image from "../../assets/vika-strawberrika-Jbwp-Gd8GHM-unsplash.jpg";
import Photo from "../../components/photo/photo";

export default function Portfolio({ isActive }) {
  return (
    <div className={`portfolio-container ${isActive ? 'active' : ''}`} id="portfolio">
      <Photo imagePath={image} />
      <Photo imagePath={image} />
      <Photo imagePath={image} />
      <Photo imagePath={image} />
      <Photo imagePath={image} />
      <Photo imagePath={image} />
      <Photo imagePath={image} />
      <Photo imagePath={image} />
    </div>
  );
}
