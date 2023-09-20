import React, { useContext, useEffect } from 'react'
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  )
}
