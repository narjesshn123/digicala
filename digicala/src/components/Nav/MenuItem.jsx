import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Dropdown } from './Dropdown'

const MenuItem = ({menu, depthLevel}) => {
  const[dropdown, setDropdown] = useState(false)
  let ref = useRef()
  const onMouseEnter = ()=>{
    window.innerWidth > 960 && setDropdown(true)
  }
  const onMouseLeave = ()=>{
    window.innerWidth > 960 && setDropdown(false)
  }
  useEffect(()=>{
    const handler = (event)=>{
      if(dropdown && ref.current && !ref.current.contain(event.target)){
        setDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return()=>{
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  },[dropdown])
  return (
    <li className="menu-items" ref= {ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
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
