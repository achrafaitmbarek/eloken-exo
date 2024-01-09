import React from 'react'
import Link from "next/link";
import CtaButton from '../components/ctaButton';
import { MdOutlineKeyboardReturn } from "react-icons/md";
const ResultsPage = () => {
  return (<div className="flex flex-col gap-8 items-center text-center p-64">
  <h1 className="text-5xl font-extrabold leading-12">
  Votre kit pompe à chaleur est prêt !
  </h1>
  <p className="text-base font-normal leading-7">
  Vous avez une maison que vous chauffez à 18°C à l’electricité. Vous consommez 21 000 kwh/an. Nous avons selectionné pour vous la Pompe à chaleur 1
  </p>
  <Link href="/wizardForm">
    <CtaButton text={"Recommencer"} type={'submit'} icon={<MdOutlineKeyboardReturn />} />
  </Link>
</div>
  )
}

export default ResultsPage;