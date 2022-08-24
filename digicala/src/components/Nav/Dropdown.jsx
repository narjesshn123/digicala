import React from 'react'
import MenuItem from './MenuItem'
import styles from './Navmenu.style.module.css'
export const Dropdown = ({submenus, dropdown, depthLevel}) => {
    depthLevel = depthLevel + 1;         
    const dropdownClass = depthLevel>1 ? "dropdown-submenu" : "";         
  return (
  
    <div className={`${styles.dropdown} ${dropdownClass} ${dropdown ? `${styles.show}` :""}`}>
        {submenus.map((submenu, index)=>(
            <MenuItem menu={submenu} key={index} depthLevel={depthLevel}/>
        ))}
    </div>
  )
}
