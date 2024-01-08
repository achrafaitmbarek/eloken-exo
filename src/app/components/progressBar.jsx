import React from "react";

const ProgressBar = ({progress}) => {
  return (
    <div className="w-full bg-gray-100 rounded-full h-3">
      <div
        className="h-full text-center text-xs bg-costum-bleu-color rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
