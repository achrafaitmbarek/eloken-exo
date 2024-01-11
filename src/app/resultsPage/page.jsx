"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CtaButton from "../components/ctaButton";
import { MdOutlineKeyboardReturn } from "react-icons/md";

import data from "../data/data";
const ResultsPage = () => {
  const { buildingType, HeatingType } = data;
  const [storageData, setStorageData] = useState({});

  useEffect(() => {
    const storageKeys = [
      "buildingType",
      "temperature",
      "heatingType",
      "consumption",
      "suggestedPump",
    ];
    let data = {};
    storageKeys.forEach((key) => {
      const item = localStorage.getItem(key);
      if (item) {
        data[key] = JSON.parse(item);
      }
    });

    // tryiig to find the corresponding title for the selected id
    if (buildingType) {
      const building = buildingType[0].options.find(
        (bt) => bt.id === data.buildingType
      );
      if (building) {
        data.buildingType = building.title;
      }
    }
    if (HeatingType) {
      const heating = HeatingType[0].options.find(
        (ht) => ht.id === data.heatingType
      );
      if (heating) {
        data.heatingType = heating.title;
      }
    }

    setStorageData(data);
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center text-center p-64">
      <h1 className="text-5xl font-extrabold leading-12">
        Votre kit pompe à chaleur est prêt !
      </h1>
      <p className="text-base font-normal leading-7">
        Vous avez une{" "}
        <span className="font-bold">{storageData.buildingType}</span> que vous
        chauffez à <span className="font-bold">{storageData.temperature}</span>
        °C à l’ <span className="font-bold">{storageData.heatingType}</span>.
        Vous consommez{" "}
        <span className="font-bold">{storageData.consumption}</span> kwh/an.
        Nous avons selectionné pour vous la{" "}
        <span className="font-bold">{storageData.suggestedPump}</span>
      </p>
      <Link href="/wizardForm">
        <CtaButton
          text={"Recommencer"}
          icon={<MdOutlineKeyboardReturn />}
          onClick={() => {
            localStorage.clear();
          }}
        />
      </Link>
    </div>
  );
};

export default ResultsPage;
