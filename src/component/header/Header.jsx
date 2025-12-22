/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import headerPic from "../../assets/header1.jpg"

function Header() {
  return (
    <div className='flex items-start justify-start w-full min-h-2/5 md:h-[550px]'>
      <img className='w-full h-full' src={headerPic} alt='shop photo' />
    </div>
  )
}

export default Header