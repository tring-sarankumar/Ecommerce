import React from 'react'
import { PRODUCTS } from '../../products';
import { Product } from '../shop/product';

const Re = () => {
  return (
    <div>
        <div className="products">
        {PRODUCTS.map((product) => (
            product.brand==="re"?
          <Product data={product} />:""
        ))}
        </div>
      
    </div>
  )
}

export default Re
