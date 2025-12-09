import React from 'react'

function CategoryItem({catImg , name}) {
  return (
    <div className='border rounded-lg min-w-[90px] h-[70%] flex justify-center items-center' name = {name} >
      <img className='w-[70%] h-[70%]' src={catImg} alt='drink' />
    </div>
  )
}

export default CategoryItem