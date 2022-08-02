import React from 'react'
import './Navmenustyle.css'
export const Dropdown = ({submenus, dropdown}) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" :""}`}>
        {submenus.map((submenu, index)=>(
            <li key={index}>
                <a>{submenu.tittle}</a>
            </li>
        ))}
    </ul>
  )
}
