import React from 'react'
import Category from "../component/category/Category"
import CardContainer from "../component/cards/CardContainer"
function Home() {
  return (
    <div className='flex flex-col items-start justify-start w-full overflow-x-hidden h-max'>
      <Category />
      <CardContainer />
    </div>
  )
}

export default Home