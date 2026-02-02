import React from 'react'

function AddCart({count = 0}) {
  return (
    <div className='w-full h-[90%] flex flex-col justify-center items-center'>
        <button className='w-10 h-10 rounded-md bg-gray-300 text-center text-black'>+</button>
        <span>{count}</span>
        <button className='w-10 h-10 rounded-md bg-gray-300 text-center text-black'>-</button>
    </div>
  )
}

export default AddCart