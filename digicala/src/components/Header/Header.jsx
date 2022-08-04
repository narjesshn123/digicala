import React from 'react'

import './Headerstyle.css'
import logo from '../../assets/image/logo.svg';
import takhfif from '../../assets/image/takhfif.gif'
import basket from '../../assets/image/basket.png'
import search from '../../assets/image/search.png';   
import { Carousel } from '../Carousel/Carousel';  
import login from '../../assets/image/login.png';  
import { Navbar } from '../Nav/Navbar';
               
export const Header = () => {
  return (
   
    <div style={{display:"flex", flexDirection: "column", flexSherink: 0, flexGrow: 1, }}>
   
      <div>
        <img className='takhfif' src={takhfif}/>
      </div>
      <div className='search-logo'>

        <div className='search-logo-left'>
        <img className='search-logo-basket' src={basket}/>           
        <hr className='left-line'/>
       <div className='search-login'>
        <p>ثبت نام</p>
        <hr style={{marginRight:"10px", marginTop:"10px"}} className='left-line'/>
        <p>ورود</p>
        <img className='login' src={login} />          
       </div>
        </div>

        <div className='search-logo-right'>
        <input type={'search'} placeholder="جستجو" className='search-field' />
        <button type='submit' className='search-button'>
        <img className='icon' src={search} width={10}/>
        </button> 
        
        <img className='digicala' src={logo}/>

        </div>
        
  
   
      </div>
      <div><Navbar/></div>
     
     
    
    </div>
  
    
  )
}
