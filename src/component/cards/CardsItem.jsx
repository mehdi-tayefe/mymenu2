import React from 'react'

function CardsItem({name , img , onClick}) {
  return (
    <div className='w-full h-20 flex justify-start items-start border-b border-gray-400 bg-orange-200 shadow-sm md:h-40 md:w-[70%]' onClick = {onClick}>
      <div className='w-1/4 h-[90%] self-center pl-2 '>
        <div className='w-full h-full border flex items-center justify-center'>
          <img className='w-full h-full' src={img} alt='drink' />
        </div>
      </div>
      <div className='w-3/4 h-[90%] flex flex-col justify-between items-center'>
        <h2>{name}</h2>
        <h2 className='text-left pl-10 self-start'>99$</h2>
      </div>
    </div>
  )
}

export default CardsItem