'use client'
import Image from 'next/image'
import products from './data/data'
import React,{ useEffect } from 'react'

export default function Home() {
  // useEffect(()=>{
  //   localStorage.setItem('products', JSON.stringify(products));
  //   console.log(storedProducts);
  // },[]);
  const storedProducts = JSON.parse(localStorage.getItem('products'));
  return (
  <div className='container mx-auto'> 
    <h1 className="text-3xl font bold ">Composez votre kit pompe a chaleur</h1>
    <div className="grid gap-3 grid-cols-2">
       {storedProducts.map((product, index)=>(
        <div>
          <h2 key={index} className="text-2xl font-bold py-5">{product.title}</h2>
          <p className="font-bold py-5">{product.powerRange.max} / {product.powerRange.min}</p>
        </div>
   ))} 
   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
            onClick={()=>{localStorage.removeItem('products');
                           console.log('storage cleared')}}>clear local Storage</button>
    </div>
  
  </div>
    )
}
