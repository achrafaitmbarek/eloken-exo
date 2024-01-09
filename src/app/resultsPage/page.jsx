"use client"
import React,{useState,useEffect} from "react";
import Link from "next/link";
import CtaButton from "../components/ctaButton";
import { MdOutlineKeyboardReturn } from "react-icons/md";


const ResultsPage = () => {
  const [data, setData] = useState({});//here i initialize the data state with an empty object so the erorr is gone before the data has been set 

  useEffect(() => {
    const storageKeys= ['buildingType','temperature','heatingType','consumption','suggestedPump']
    let data = {};
        storageKeys.forEach((key) => {
            const item = localStorage.getItem(key);
            if (item) {
                data[key] = JSON.parse(item);
            }
        });
        setData(data);
  }, []);
  return (
    <div className="flex flex-col gap-8 items-center text-center p-64">
      <h1 className="text-5xl font-extrabold leading-12">
        Votre kit pompe à chaleur est prêt !
      </h1>
      <p className="text-base font-normal leading-7">
      Vous avez une {data.buildingType} que vous chauffez à {data.temperature}°C à l’{data.heatingType}. Vous
                consommez {data.consumption} kwh/an. Nous avons selectionné pour vous la {data.suggestedPump}
      </p>
      <Link href="/wizardForm">
        <CtaButton
          text={"Recommencer"}
          type={"submit"}
          icon={<MdOutlineKeyboardReturn />}
        />
      </Link>
    </div>
  );
};

export default ResultsPage;
