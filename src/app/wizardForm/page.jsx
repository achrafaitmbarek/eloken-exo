'use client';
import React, { useState } from 'react'
import CustomButton from '../components/customButton';





const WizardForm = () => {
  
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick=() => {
    setIsButtonClicked(!isButtonClicked);
  }

  return (
  <div>
    <CustomButton text='Quitter' onClick={handleClick}/>
    <p>Kit Pompe a chaleur</p>
    {isButtonClicked && <p>Vous avez cliqué sur le bouton</p>}
    </div>
  )
}

export default WizardForm
