import React from 'react'
import { useState } from 'react';
import { Dropdown } from './Dropdown'

const MenuItem = ({menu}) => {
  const[dropdown, setDropdown] = useState(false)
  return (
    <li className="menu-items">
    {menu.submenu ? (
     <>
      <button aria-expanded={dropdown ? "true" : "false"} 
      onClick = {()=>setDropdown((prev)=> !prev)}
    
      >
       {menu.tittle}
      </button>
      <Dropdown submenus={menu.submenu} 
      dropdown={dropdown}
      />
     </>
    ) : (
     <a href="/#">{menu.tittle}</a>
    )}
   </li>
  )};

export default MenuItem
