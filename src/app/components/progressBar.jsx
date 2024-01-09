import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-100 rounded-full h-3">
      <div
        className="h-full text-center text-xs bg-costum-bleu-color rounded-full transition-all duration-700"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
