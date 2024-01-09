import React from "react";
import Image from "next/image";

const ProductCard = ({
  title,
  pacType,
  gasType,
  garranty,
  isPacSystemModule,
  price,
  imgUrl,
}) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <Image src={imgUrl}  className='w-full' alt="card-image" />
      </div>
      <div className="p-4">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
      </div>
      <div className="flex flex-wrap mx-4 mb-4 items-center">
        <span className="bg-blue-200 text-blue-800 text-xs font-semibold m-1 px-4 py-1 rounded ">
          {pacType}
        </span>
        <span className="bg-blue-200 text-blue-800 text-xs font-semibold m-1 px-4 py-1 rounded">
          {gasType}
        </span>
        <span className="bg-blue-200 text-blue-800 text-xs font-semibold m-1 px-4 py-1 rounded">
          Garantie {garranty} ans
        </span>
        <span className="bg-blue-200 text-blue-800 text-xs font-semibold m-1 px-4 py-1 rounded">
         {isPacSystemModule?'PAC Systeme Module':'Non PAC Systeme Module'} 
        </span>
      </div>
      <div className='flex justify-end px-6 text-xs'>Prix unitaire TTC</div>
      <div className="flex flex-row mb-8 ">
        <div className="flex-1">
          <button
            className="font-bold text-center transition-all disabled:pointer-events-none text-xs py-3 px-6  text-amber-500"
            type="button"
          >
            En savoir plus
          </button>
        </div>
        <div className="flex-2 py-2 px-6 text-xl font-bold">{price} €</div>
      </div>
    </div>
  );
};

export default ProductCard;
