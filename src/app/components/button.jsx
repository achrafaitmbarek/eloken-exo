"use client";
import React from "react";

const Button = ({ text, type, className }) => {
  return (
    <button text={text} type={type} className={className}>
      {text}
    </button>
  );
};
export default Button;
