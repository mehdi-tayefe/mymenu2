import React, { useContext, useEffect, } from 'react'
import Shake from './Shake'
import Cocktail from './Cocktail'
import Beer from './Beer'
import Shot from './Shot'
import Punch from './Punch'
import Cocoa from './Cocoa'
import Other from './Other'
import { menuContext } from '../../context/MenuContext'


function CardContainer() {

  const { catName } = useContext(menuContext);


  const renderComponent = () => {
    switch (catName) {
      case "Shake": return <Shake />
      case "Cocktail": return <Cocktail />
      case "Beer": return <Beer />
      case "Shot": return <Shot />
      case "Punch": return <Punch />
      case "Cocoa": return <Cocoa />
      case "Other": return <Other />
      default: return <Shake />;
    }
  }
  useEffect(() => {

  })

  return (

    <div className='w-full h-max flex flex-col justify-start items-start gap-2 bg-stone-400 pb-2 '>
      {
        renderComponent()
      }
    </div>
  )
}

export default CardContainer