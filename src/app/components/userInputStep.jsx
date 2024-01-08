import React, { useState } from "react";

const UserInputStep = ({ unity, minValue, maxValue , question }) => {
  const [value, setValue] = useState(21000); // here i initilize by unity value depends on the props passed

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='flex flex-col items-center h-3/5 justify-center'> 
      <div className="flex flex-col gap-4 max-w-3xl">
      <div className="text-3xl font-semibold max-w-sm">
      A quelle température chauffez vous en moyenne cette surface ?
        </div>
        <div className='text-xl font-semibold max-w-sm"'>{value.toLocaleString('fr-FR')}°C</div>
        <input
          type="range"
          min="1000"
          max="30000"
          value={value}
          onChange={handleChange}
          className="w-full h-1 bg-gray-200 rounded-full outline-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
          style={{ background: "linear-gradient(to right, white 0%, red " + 14 + "%, #fff " + 90 + "%, white 100%)" }}
        />
        
      </div>
    </div>
  );
};

export default UserInputStep;
