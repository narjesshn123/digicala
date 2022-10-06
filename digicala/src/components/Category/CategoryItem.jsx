import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Category.style.module.css'
import {Card, Button, CardImg} from 'react-bootstrap'

const CategoryItem = ({categories, id, pic, name}) => {
  return (

<div> 
       <Card className='p-0 overflow-hidden h-100' style={{border:"none"}}>
       <Link to={"/users/" +id} pic={pic}>
            <Card.Img variant='top' src={categories.pic}/>
        <Card.Body className='text-center'>
            <Card.Title className={styles.font}>{name}</Card.Title>
            <Card.Title  className={styles.font}>{categories.tittle}</Card.Title>
        </Card.Body>            
        </Link>
        </Card> 
    </div>


  )
}

export default CategoryItem















