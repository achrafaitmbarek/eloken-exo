"use client";
import React from "react";

const CardChoice = ({title, image, type}) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default CardChoice;
