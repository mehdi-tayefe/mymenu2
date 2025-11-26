import React from 'react'
import CategoryItem from './CategoryItem'

function Category() {
  return (
    <div className='flex items-center justify-start w-full h-40 gap-2 overflow-x-auto scrollbar-hidden whitespace-nowrap bg-gray-500 pl-2 shadow-lg'>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </div>
  )
}

export default Category