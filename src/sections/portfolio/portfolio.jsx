import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import image from "../../assets/vika-strawberrika-Jbwp-Gd8GHM-unsplash.jpg";
import Photo from "../../components/photo/photo";

export default function Portfolio({ isActive }) {
  const [columnCount, setColumnCount] = useState(getColumnCount());

  function getColumnCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) return 2; // Telas menores que 600px terão 2 colunas
    else if (screenWidth < 900) return 3; // Telas menores que 900px terão 3 colunas
    return 4; // Telas maiores terão 4 colunas
  }

  useEffect(() => {
    function handleResize() {
      setColumnCount(getColumnCount());
    }

    window.addEventListener('resize', handleResize);
    // Chama handleResize imediatamente para definir o número de colunas inicial
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
      <div style={{ columnCount: columnCount, columnGap: "20px" }}>
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
        <Photo imagePath={image} />
      </div>
    </div>
  );
}
