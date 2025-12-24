import React from 'react'

function ShoppingCard({img ,name ,count}) {
  return (
    <div className='w-full h-32 grid grid-cols-[2fr_2fr_1fr] gap-2 border border-black rounded-sm'>
        <div className='w-full h-full p-2 flex justify-center items-center'>
            <img src={img} alt='drinks' className='w-full h-full' />
        </div>
        <div className='w-full h-full p-4 flex flex-col justify-between items-center'>
            <div className='text-xl font-bold'>{name}</div>
            <div className='text-xl font-bold self-start'>99$</div>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
            <div className='w-24 h-24 text-center bg-gray-500 cursor-pointer'>+</div>
            <div className='w-6 h-12 text-center'>{count}</div>
            <div className='w-24 h-24 text-center bg-gray-500 cursor-pointer'>-</div>
        </div>
    </div>
  )
}

export default ShoppingCard