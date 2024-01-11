"use client";
import React from "react";
import Link from "next/link";
import CtaButton from "./components/ctaButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center text-center p-8 md:p-24 lg:p-52">
      <h1 className="text-5xl font-extrabold leading-10">
        Composez votre Kit pompe à chaleur
      </h1>
      <p className="text-base font-normal leading-7">
        Vous souhaitez installer une PAC chez vous ? Composez le Kit PAC idéal
        pour votre maison grâce à notre configurateur en ligne et gratuit.
      </p>
      <Link href="/wizardForm">
        <CtaButton text={"Commencer"} type={"submit"} />
      </Link>
      <div className="source-code bottom-0 w-full fixed mb-6">
        <p className="text-lg">
          Source code provided by{" "}
          <a
            className="font-bold"
            href="https://github.com/achrafaitmbarek/eloken-exo"
          >
            Achraf Ait Mk 🖤 Eloken
          </a>
        </p>
      </div>
    </div>
  );
}
