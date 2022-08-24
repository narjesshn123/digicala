import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Dropdown } from './Dropdown'
import styles from './Navmenu.style.module.css'

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
    <div  ref= {ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
    {menu.submenu ? (
     <>
      <a className={styles.items} aria-expanded={dropdown ? "true" : "false"} 
      onClick = {()=>setDropdown((prev)=> !prev)}
    
      >
       {menu.tittle}
       {depthLevel>0 ?<span>&raquo;</span>:<span className={styles.arrow}/>}
      </a
      >
    
      <Dropdown submenus={menu.submenu} 
      dropdown={dropdown}
      depthLevel={depthLevel}
      />
      
     </>
    ) : (
     <a className={styles.menu} href="/#">{menu.icon}{menu.tittle}</a>
   
    )}
     
   </div>
  )};

export default MenuItem
