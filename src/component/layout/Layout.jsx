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

        <Footer />
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired, 
  };
export default Layout