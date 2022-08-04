import React from 'react'
import MenuItem from './MenuItem'
import './Navmenustyle.css'
export const Dropdown = ({submenus, dropdown, depthLevel}) => {
    depthLevel = depthLevel + 1;         
    const dropdownClass = depthLevel>1 ? "dropdown-submenu" : "";         
  return (
   
    <div className={`dropdown ${dropdownClass} ${dropdown ? "show" :""}`}>
        {submenus.map((submenu, index)=>(
            <MenuItem menu={submenu} key={index} depthLevel={depthLevel}/>
        ))}
    </div>
  )
}
