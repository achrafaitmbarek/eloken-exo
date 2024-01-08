import React, { useEffect, useState } from "react";
import Card from "./card";

const selectionStep = ({ selection }) => {
  const [selecetedChoice, setSelecetedChoice] = useState(null);
  useEffect(() => {
    console.log(selecetedChoice);
  }, [selecetedChoice]);
  const handleChoice = (id) => {
    setSelecetedChoice(id);
  };
  return (
    <div className="flex flex-col items-center h-3/5 justify-center">
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="text-3xl font-semibold max-w-sm">
          {selection[0].question}
        </div>
        <div className="flex flex-row gap-8">
          {selection[0].options.map((option) => (
            <Card
              key={option.id}
              id={option.id}
              title={option.title}
              imgPath={option.imgPath}
              selecedId={selecetedChoice}
              onCardClicked={handleChoice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default selectionStep;
