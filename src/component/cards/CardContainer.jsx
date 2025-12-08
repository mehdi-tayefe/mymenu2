import React from 'react'
import Shake from './Shake'
import Cocktail from './Cocktail'
import Beer from './Beer'
import Shot from './Shot'
import Punch from './Punch'
import Cocoa from './Cocoa'
import Other from './Other'


function CardContainer() {
  return (

    <div className='w-full h-max flex flex-col justify-start items-start gap-1 bg-white '>
      <Shake />
      <Cocktail />
      <Beer />
      <Shot />
      <Punch />
      <Cocoa />
      <Other />
   
    </div>
  )
}

export default CardContainer