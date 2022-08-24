import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  styles from './Category.style.module.css'
import CategoryItem from './CategoryItem'
// import {useParams} from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Categories = ({users, id}) => {
  // const {id} = useParams;
  // alert(userId)

  return (
    <div className={styles.contain}>
    
      {users.map((categories) =>(
          <CategoryItem categories={categories} id={categories.id}/>
      ))}

    </div>
  )
}

export default Categories
