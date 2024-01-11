"use client";
import React, { useState, useEffect } from "react";
import CtaButton from "../components/ctaButton";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Stepper from "../components/stepper";
import ProgressBar from "../components/progressBar";
import SelectionStep from "../components/selectionStep";
import UserInputStep from "../components/userInputStep";
import Result from "../components/result";
import data from "../data/data";
import Modal from "../components/modal";

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const NBR_OF_STEPS = 5;

  const [progress, setProgress] = useState(0);

  const { buildingType, HeatingType } = data; // here i destructure the data object to get the buildingType property

  const [showModal, setShowModal] = useState(false);

  const handleQuit = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    window.location.href = "/";
    setShowModal(false);
  };

  useEffect(() => {
    setProgress((currentStep / NBR_OF_STEPS) * 100);
  }, [currentStep]);

  const handleNext = () => {
    currentStep < NBR_OF_STEPS && setCurrentStep(currentStep + 1);
    // console.log(currentStep);
  };

  const handlePrev = () => {
    currentStep > 1 && setCurrentStep(currentStep - 1);
    // console.log(currentStep);
  };

  const formSTeps = [
    <SelectionStep selection={buildingType} storageKey={"buildingType"} />,
    <UserInputStep
      unit={"°C"}
      minValue={0}
      maxValue={40}
      defaultValue={18}
      question={"A quelle température chauffez vous en moyenne cette surface ?"}
      storageKey={"temperature"}
    />,
    <SelectionStep selection={HeatingType} storageKey={"heatingType"} />,
    <UserInputStep
      unit={"Kwh/an"}
      minValue={1000}
      maxValue={30000}
      defaultValue={21000}
      question={"Quelle est votre consommation en kWh chaque année ?"}
      storageKey={"consumption"}
    />,
    <Result />,
  ];
  return (
    <div className="m-8 space-y-6 ">
      <div className="flex flex-row items-center space-x-3">
        <CtaButton
          text="Quitter"
          icon={<IoArrowBackCircleOutline />}
          onClick={handleQuit}
        />
        {showModal ? (
          <Modal
            show={showModal}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        ) : null}
        <p>Kit Pompe a chaleur</p>
      </div>
      <ProgressBar progress={progress} />
      {formSTeps[currentStep - 1]}
      <Stepper
        currentStep={currentStep}
        nbrOfStep={NBR_OF_STEPS}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default WizardForm;
