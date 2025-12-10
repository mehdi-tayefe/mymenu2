import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  const returnToHomePage = () =>{
    navigate("/")
    
  }

  return (
    <div className='w-full h-[500px] flex flex-col justify-center items-center bg-gray-500'>
      <div className='w-max h-max text-center text-white font-bold text-3xl'>cant found this page</div>
      <div className='w-60 h-20 bg-green-300 mt-10 flex justify-center items-center border rounded-xl'>
        <button className='w-full h-full text-center font-bold text-xl' onClick={returnToHomePage}>back to home page</button>
      </div>
    </div>

  )
}

export default NotFound