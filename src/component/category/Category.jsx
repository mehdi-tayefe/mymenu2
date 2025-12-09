import React from 'react'
import CategoryItem from './CategoryItem'
import Shake from "../../assets/category/soda.png"
import cocktail from "../../assets/category/cocktail.png"
import Shot from "../../assets/category/soft.png"
import Beer from "../../assets/category/cheers.png"
import Cocoa from "../../assets/category/coconut.png"
import Punch from "../../assets/category/juice.png"
import Other from "../../assets/category/mocktail.png"

function Category() {

  const catDrinks = [
    { name: "Shake", img: Shake },
    { name: "Cocktail", img: cocktail },
    { name: "Shot", img: Shot },
    { name: "Beer", img: Beer },
    { name: "Cocoa", img: Cocoa },
    { name: "Punch", img: Punch },
    { name: "Other", img: Other }
  ];

  return (
    <div className='flex items-center justify-start w-full h-40 gap-2 overflow-x-auto scrollbar-hidden whitespace-nowrap bg-gray-500 pl-2 shadow-lg  static top-0'>
      {catDrinks.map((item, index) => (
        <CategoryItem key={index} catImg={item.img} name={item.name} />
      ))}

    </div>
  )
}

export default Category