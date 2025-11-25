import React from 'react'

function CardsItem() {
  return (
    <div className='w-full h-20 flex justify-start items-start border-b bg-purple-300'>
      <div className='w-1/4 h-[90%] self-center pl-2 border'>
        <div className='w-full h-full bg-green-400 border'>

        </div>
      </div>
      <div className='w-3/4 h-[90%] flex flex-col justify-between items-center'>
        <h2>black coffee</h2>
        <h2 className='text-left pl-10 self-start'>99$</h2>
      </div>
    </div>
  )
}

export default CardsItem