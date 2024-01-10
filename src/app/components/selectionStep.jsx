import React, { useEffect, useState } from "react";
import Card from "./card";

const selectionStep = ({ selection,storageKey }) => {
  const [selectedChoice, setSelectedChoice] = useState(1);
  
  useEffect(() => {
    localStorage.setItem(storageKey, selectedChoice);
    console.log(selectedChoice);
  }, [selectedChoice]);


  const handleCardChoice = (id) => {
    setSelectedChoice(id);
  };
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="flex flex-col mt-24 gap-10 max-w-4xl animate-fade-in-scale">
        <div className="text-3xl font-semibold max-w-sm">
          {selection[0].question}
        </div>
        <div className="flex flex-row gap-8">
          {selection[0].options.map((option,index) => (
            <Card
              key={option.id}
              id={option.id}
              title={option.title}
              imgPath={option.imgPath}
              selecedId={selectedChoice}
              onCardClicked={handleCardChoice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default selectionStep;
