'use client'
import Image from 'next/image'
import Form from './components/stepForm'
import products from './data/data'

export default function Home() {
  return (
  <div className='container mx-auto'> 
    <h1 className="text-3xl font bold ">Composez votre kit pompe a chaleur</h1>
    <div className="grid gap-3 grid-cols-2">
       {products.map((product, index)=>(
        <div>
          <h2 key={index} className="text-2xl font-bold py-5">{product.title}</h2>
          <p className="font-bold py-5">{product.powerRange.max} / {product.powerRange.min}</p>
        </div>
   ))} 
    </div>
  
  </div>
    )
}
