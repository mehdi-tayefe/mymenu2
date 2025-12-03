import React from 'react'
import CategoryItem from './CategoryItem'
import soda  from "../../assets/category/soda.png"
import cocktail  from "../../assets/category/cocktail.png"
import soft  from "../../assets/category/soft.png"
import cheers  from "../../assets/category/cheers.png"
import coconut  from "../../assets/category/coconut.png"
import juice  from "../../assets/category/juice.png"
import mocktail  from "../../assets/category/mocktail.png"

function Category() {

  const catDrinks =[
    soda , cocktail ,soft ,cheers, coconut ,juice , mocktail
  ]

  return (
    <div className='flex items-center justify-start w-full h-40 gap-2 overflow-x-auto scrollbar-hidden whitespace-nowrap bg-gray-500 pl-2 shadow-lg  static top-0'>
          {catDrinks.map((img, index) => (
        <CategoryItem key={index} catImg={img} />
      ))}
 
    </div>
  )
}

export default Category