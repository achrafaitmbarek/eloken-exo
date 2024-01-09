import React from "react";
import ProductCard from "./productCard";
import CtaButton from "./ctaButton";
import Link from "next/link";
function Result() {
  return (
    <div className="flex flex-row gap-24 justify-center items-center">
      <div className="flex flex-col gap-8 basis-2/4">
        <div className="text-3xl font-semibold max-w-md">
          <span className="text-gray-500">Merci pour ces informations !</span>{" "}
          Nous avons choisi cette pompe à chaleur pour vous
        </div>
        <div>
          <Link href="/resultsPage">
            <CtaButton text={"Terminer"} />
          </Link>
        </div>
      </div>
      <ProductCard className="basis-2/4" />
    </div>
  );
}

export default Result;
