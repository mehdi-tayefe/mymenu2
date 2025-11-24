import React from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer"
import PropTypes from "prop-types";

function Layout({children}) {
  return (
    <div className='relative flex flex-col items-center justify-start w-screen h-screen '>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired, 
  };
export default Layout