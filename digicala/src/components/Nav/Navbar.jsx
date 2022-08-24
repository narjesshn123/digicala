import React from 'react'
import { menuItems } from './menuItems'
import MenuItem from './MenuItem'
import styles from './Navmenu.style.module.css'
import { BiSearch } from 'react-icons/bi'
export const Navbar = () => {
  const depthLevel = 0;          
  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
    {/* <div className={styles.left}> */}
     
    {menuItems.map((menu, index)=>(
          <MenuItem key={index} menu={menu} depthLevel={depthLevel} className={styles.menuitem} />        
        )
        )}
    {/* </div>
      <div className={styles.center}>center</div>
      <div className={styles.right}>right</div> */}
      
      </div>    
    </div>
    <hr/>
    </>
  )
}
           