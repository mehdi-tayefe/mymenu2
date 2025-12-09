import React from 'react'

function CategoryItem({catImg , name ,onClick}) {
  return (
    <div className='border rounded-lg min-w-[90px] h-[70%] flex justify-center items-center' name = {name}  onClick={onClick}>
      <img className='w-[70%] h-[70%]' src={catImg} alt='drink' />
    </div>
  )
}

export default CategoryItem