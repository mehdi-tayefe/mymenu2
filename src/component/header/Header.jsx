/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import headerPic from "../../assets/header1.jpg"

function Header() {
  return (
    <div className='flex items-start justify-start w-full h-2/5'>
      <img className='w-full h-full' src={headerPic} alt='shop photo' />
    </div>
  )
}

export default Header