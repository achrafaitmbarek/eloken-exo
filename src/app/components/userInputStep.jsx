import React, { useState,useEffect } from "react";

const UserInputStep = ({
  unit,
  minValue,
  maxValue,
  defaultValue,
  question,
  storageKey,
}) => {
  const [value, setValue] = useState(defaultValue); // here i initilize by unity value depends on the props passed

  useEffect(() => {
    localStorage.setItem(storageKey, defaultValue);
  }, [defaultValue, storageKey]);

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem(storageKey, event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col mt-24 gap-10 max-w-4xl">
        <div className="text-3xl font-semibold max-w-md">
          {question}
        </div>
        <div>
          <div className='text-xl font-semibold max-w-sm"'>{`${value.toLocaleString(
            "fr-FR"
          )} ${unit}`}</div>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange}
            className="w-full h-2 bg-gray-400 rounded-full outline-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInputStep;
