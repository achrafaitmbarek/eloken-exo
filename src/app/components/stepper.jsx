import React from "react";
import CtaButton from "./ctaButton";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled} from "react-icons/tb";
const Stepper = ({currentStep,nbrOfStep, onPrev, onNext}) => {
  return (
    <div className="p-2 gap-60 border rounded-lg flex items-center justify-between fixed bottom-4 left-4 right-4  ">
      <CtaButton text={"Retour"} onClick={onPrev} disabled={currentStep === 1} icon={<TbPlayerTrackPrevFilled/>}/>
      <div>{currentStep}/{nbrOfStep}</div>
      <CtaButton text={"Suivant"} onClick={onNext} disabled={currentStep === nbrOfStep} icon={<TbPlayerTrackNextFilled/>}/>
    </div>
  );
};

export default Stepper;
