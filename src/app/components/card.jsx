import React from 'react'
import Image from 'next/image'

const card = ({id ,title,imgPath,selecedId,onCardClicked}) => {
    const isSelected = id === selecedId;
  return (
    <div className={`flex-1 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer ${isSelected ?'border-2 border-costum-bleu-color' : ''}`} onClick={()=>onCardClicked(id)}>
        <Image className='h-36 w-60 object-cover' src={imgPath} alt={title}/>
        <div className='py-8 font-medium text-base my-2 text-center'>{title}</div>
    </div>
  )
}

export default card