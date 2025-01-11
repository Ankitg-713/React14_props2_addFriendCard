import React from 'react'

function Card({values, handleClick, cardIndex}) {

    const {name, profession, image, friends} = values;

  return (
    <div className='w-52 bg-zinc-400 rounded-md overflow-hidden'>
        <div className="w-full h-36 bg-sky-300">
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className='w-full p-3 bg-zinc-200'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-sm text-zinc-500'>{profession}</h5>
            <button onClick={()=>handleClick(cardIndex)} className={`px-3 py-2 ${friends ? "bg-green-600" : "bg-blue-500"} text-zinc-100 text-xs font-sans font-semibold rounded-md mt-2 w-full`}>{friends ? "Added" : "Add Friend"}</button>
        </div>
    </div>
  )
}

export default Card