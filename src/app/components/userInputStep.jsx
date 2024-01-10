import React, { useState, useEffect } from "react";

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
        <div className="text-3xl font-semibold max-w-md animate-fade-in-scale-1 ">{question}</div>
        <div>
          <div className='max-w-sm animate-fade-in-scale-2 '>
            <span className="text-xl font-bold">{value.toLocaleString("fr-FR")}</span>
            <span className="text-sm font-semibold">{unit}</span>
          </div>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={value}
            onChange={handleChange}
            className="w-full h-2 rounded-full animate-fade-in-scale-3 appearance-none bg-costum-bleu-color outline-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInputStep;
