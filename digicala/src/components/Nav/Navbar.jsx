import React from 'react'
import { menuItems } from './menuItems'
import MenuItem from './MenuItem'
export const Navbar = () => {
  return (
    <ul className='menus'>
        {menuItems.map((menu, index)=>(
          <MenuItem key={index} menu={menu} />             
        )
        )}
    </ul>
  )
}
