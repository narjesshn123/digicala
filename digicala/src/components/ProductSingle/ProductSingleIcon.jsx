import React from 'react'
import { productIcon } from './productIcon'
const ProductSingleIcon = () => {
  return (
       <span>
            {productIcon.map((iconleft, index) =>(
                <div key={index}>{iconleft.icon}</div>
            ))}
            </span>
  )
}

export default ProductSingleIcon
