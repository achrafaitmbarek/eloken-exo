import React from "react";
import CtaButton from "./ctaButton";
const Stepper = ({currentStep,nbrOfStep, onPrev, onNext}) => {
  return (
    <div className="p-4 border rounded-lg flex items-center justify-between">
      <CtaButton text={"Previous"} onClick={onPrev} disabled={currentStep===1}/>
      <div>{currentStep}/{nbrOfStep}</div>
      <CtaButton text={"Next"} onClick={onNext} disabled={currentStep===nbrOfStep}/>
    </div>
  );
};

export default Stepper;
