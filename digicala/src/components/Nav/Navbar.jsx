import React from 'react'
import { menuItems } from './menuItems'
import MenuItem from './MenuItem'
import './Navmenustyle.css'
export const Navbar = () => {
  const depthLevel = 0;          
  return (
    <>
    <div className='menus'>
        {menuItems.map((menu, index)=>(
          <MenuItem key={index} menu={menu} depthLevel={depthLevel} />  
               
        )
        )}
         
    </div>
    <hr/>
    </>
  )
}
           