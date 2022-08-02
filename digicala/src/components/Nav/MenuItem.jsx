import React from 'react'
import { useState } from 'react';
import { Dropdown } from './Dropdown'

const MenuItem = ({menu, depthLevel}) => {
  const[dropdown, setDropdown] = useState(false)
  return (
    <li className="menu-items">
    {menu.submenu ? (
     <>
      <button aria-expanded={dropdown ? "true" : "false"} 
      onClick = {()=>setDropdown((prev)=> !prev)}
    
      >
       {menu.tittle}
       {depthLevel>0 ?<span>&raquo;</span>:<span className='arrow'/>}
      </button>
      <Dropdown submenus={menu.submenu} 
      dropdown={dropdown}
      depthLevel={depthLevel}
      />
     </>
    ) : (
     <a href="/#">{menu.tittle}</a>
    )}
   </li>
  )};

export default MenuItem
