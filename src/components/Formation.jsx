import React, { useState } from 'react'
import { MyContext } from './MyContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Home from './Home';

function Formation({children}) {
  const [hospital, setHospital] = useState("home")

  
  return (
    <>
    <MyContext.Provider value={{hospital,setHospital}}>
        {children}
        <Navbar/>
        <Home/>
        <Outlet/>
        <Footer/>
    </MyContext.Provider>
      
    </>
  )
}

export default Formation;