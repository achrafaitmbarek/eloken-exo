'use client';
import React, { useState } from 'react'
import CtaButton from '../components/ctaButton';
import { IoArrowBackCircleOutline } from "react-icons/io5"


const WizardForm = () => {
  
  const [currentStep, setCurrentStep] = useState(0);

  const handleClick=() => {
    setCurrentStep(prevState => prevState+1);
    console.log(currentStep);
  }

  return (
  <div className='flex flex-row items-center space-x-3'>
    <CtaButton text='Quitter' onClick={handleClick} icon={<IoArrowBackCircleOutline />}/>
    <p>Kit Pompe a chaleur</p>
  </div>
  )
}

export default WizardForm
