import React from 'react'
import { menuItems } from './menuItems'
import MenuItem from './MenuItem'
export const Navbar = () => {
  const depthLevel = 0;          
  return (
    <ul className='menus'>
        {menuItems.map((menu, index)=>(
          <MenuItem key={index} menu={menu} depthLevel={depthLevel} />             
        )
        )}
    </ul>
  )
}
