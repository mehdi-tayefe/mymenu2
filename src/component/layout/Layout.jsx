import React from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer"
import PropTypes from "prop-types";
import shoppingCard from "../../assets/shopping/shoppingCard.png"
import { Link } from 'react-router-dom';

function Layout({children}) {
  return (
    <div className='relative flex flex-col items-center justify-start w-full min-h-screen '>
        <Header />
        <main className="flex flex-col items-center flex-1 w-full">
           {children}
        </main>
         <Link to ={"/shopping"}><div className='w-16 h-16 rounded-full fixed bottom-8 right-6 bg-red-500 z-50'>
            <img className='w-full h-full p-3' alt='shopping card' src={shoppingCard} />
        </div></Link>
        <Footer />
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired, 
  };
export default Layout