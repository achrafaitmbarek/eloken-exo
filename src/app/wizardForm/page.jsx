"use client";
import React, { useState } from "react";
import CtaButton from "../components/ctaButton";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Stepper from "../components/stepper";
import ProgressBar from "../components/progressBar";
import SelectionStep from "../components/selectionStep";
import UserInputStep from "../components/userInputStep";

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nbrOfSteps = 5;
  const [progress, setProgress] = useState((currentStep + 1) * 100 / nbrOfSteps);

  
  const handleNext=()=>{
    currentStep < nbrOfSteps && setCurrentStep(currentStep+1);
    console.log(currentStep);
  };

  const handlePrev=()=>{
    currentStep > 1 && setCurrentStep(currentStep-1);
    console.log(currentStep);
  };

  const formSTeps = [
    <SelectionStep />,
    <UserInputStep/>,
    <SelectionStep/>,
    <UserInputStep/>,
  ]
  return (
    <div className="m-6 space-y-3">
      <div className="flex flex-row items-center space-x-3">
        <CtaButton
          text="Quitter"
          icon={<IoArrowBackCircleOutline />}
        />
        <p>Kit Pompe a chaleur</p>
      </div>

    <ProgressBar progress={progress}/>
    {formSTeps[currentStep-1]}
    <Stepper currentStep={currentStep} nbrOfStep={nbrOfSteps} onNext={handleNext} onPrev={handlePrev}  />
    </div>
  );
};

export default WizardForm;
