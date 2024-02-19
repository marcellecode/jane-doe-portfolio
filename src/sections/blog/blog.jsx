import React from "react";
import "./blog.scss";
import image from "../../assets/vika-strawberrika-Jbwp-Gd8GHM-unsplash.jpg";

export default function Blog({ isActive }) {
  return (
    <div className={`blog-container ${isActive ? 'active' : ''}`} id="blog">
      <div className="blog-text">
        <span className="section-title">podcast</span>
        <h1>Design & Destinations</h1>
        <p>
          O podcast que une a paixão pelo design com o amor por viagens,
          explorando como cada lugar molda a criatividade e a estética.
          Sintonize para descobrir como as aventuras globais podem influenciar o
          processo criativo e inspirar a inovação no mundo do design.
        </p>
      </div>
      <div className="blog-image">
        <img src={image} alt="Jane Profile Image" />
      </div>
    </div>
  );
}
