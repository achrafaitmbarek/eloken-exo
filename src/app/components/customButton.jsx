"use client";
import Link from "next/link";
import React from "react";

const CustomButton = ({ text, type ,action}) => {
  return (
    <Link href={'/wizardForm'}>
        <button onClick={()=>{console.log('clicked')}} text={text} type={type} 
    className='bg-costum-button-color text-white rounded-lg px-4 py-2'>
      {text}
    </button>
    </Link>

  );
};
export default CustomButton;
