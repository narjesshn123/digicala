import React from 'react'
import {Card, Button, CardImg} from 'react-bootstrap'
import { useState } from 'react'
export const Categorycard = () => {
    const[Products, setProducts] = useState([])
  return (
   <>

        {Products.map((product) =>(
            <div key={product.id}> 
       <Card className='p-0 overflow-hidden h-100 shadow'>
        <div className='overflow-hidden rounded p-0 bg-light'>
            <Card.Img variant='top' src={product.pic}/>
        </div>
        <Card.Body className='text-center'>
            <Card.Title className='display-6'>{product.name}</Card.Title>
            <Card.Title></Card.Title>
        </Card.Body>
        <Button className='w-100 rounded-0' variant='success'>Add to cart</Button>
        </Card> 
    </div>
  ))}
  </>
)}
