import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Category/Category.style.module.css'
import {Card, Button, CardImg} from 'react-bootstrap'

const AmazingItem = ({product, pic, id}) => {


  return (
<>
<div > 
  
       <Card className='p-0 overflow-hidden h-100 shadow'>
       <Link to={"/products/" +id} pic={pic}>
        <div className='overflow-hidden rounded p-0 bg-light'>
            <Card.Img variant='top' src={product.pic}/>
        </div>
        <Card.Body className='text-center'>
            <Card.Title className={styles.font}>{product.name}</Card.Title>
            <Card.Title  className={styles.font}>{product.tittle}</Card.Title>
        </Card.Body>
        {/* <Button className='w-100 rounded-0' variant='success'>show now</Button> */}
        </Link>
        </Card>
        
    </div>


</>

  )
}

export default AmazingItem







// export const Categorycard = () => {
//   const[Products, setProducts] = useState([])
// return (
//  <>

//       {Products.map((product) =>(
//           <div key={product.id}> 
//      <Card className='p-0 overflow-hidden h-100 shadow'>
//       <div className='overflow-hidden rounded p-0 bg-light'>
//           <Card.Img variant='top' src={product.pic}/>
//       </div>
//       <Card.Body className='text-center'>
//           <Card.Title className='display-6'>{product.name}</Card.Title>
//           <Card.Title></Card.Title>
//       </Card.Body>
//       <Button className='w-100 rounded-0' variant='success'>Add to cart</Button>
//       </Card> 
//   </div>
// ))}
// </>
// )}