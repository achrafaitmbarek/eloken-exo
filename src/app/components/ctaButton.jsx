"use client";
import Link from "next/link";
import React from "react";

const CustomButton = ({ text, type, onClick, icon, disabled }) => {
  const buttonStyle =
    text === "Previous"
      ? "border border-black bg-white-button-color text-black rounded-lg px-4 py-2 flex flex-row items-center justify-center"
      : "border-2 border-black bg-costum-bleu-color text-white rounded-lg px-4 py-2 flex flex-row items-center";

  const disabledButtonStyle =
    "border border-black text-black py-2 px-4 rounded opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      text={text}
      type={type}
      className={`${buttonStyle} ${disabled ? disabledButtonStyle : ""}`}
      disabled={disabled}
    >
      {text === "Next" ? (
        <>
          {text}
          {icon && <span className="pl-2">{icon}</span>}
        </>
      ) : (
        <>
          {icon && <span className="pr-2">{icon}</span>}
          {text}
        </>
      )}
    </button>
  );
};
export default CustomButton;
