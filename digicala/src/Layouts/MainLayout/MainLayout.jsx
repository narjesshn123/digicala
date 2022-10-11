import React from 'react'
import  Header  from '../../components/Header/Header';          
import { Footer } from '../../components/Footer/Footer';
import {Outlet} from 'react-router-dom'
import { useState } from 'react';
// import NavScrollExample from '../../components/Header/Header/NavScrollExample'

const MainLayout = ({filter, setFilter, isLoggedin, setIsLoggedin}) => {
  // const [isLoggedin, setIsLoggedin] = useState(false);        
  return (
    <div>
     <Header filter={filter} setFilter={setFilter} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>           
      <main>
        <Outlet filter={filter} setFilter={setFilter} />      
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout