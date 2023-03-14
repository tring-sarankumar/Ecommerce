import React from 'react'
import { PRODUCTS } from '../../products';
import { Product } from '../shop/product';

const Smk = () => {
  return (
    <div>
       <div className="products">
        {PRODUCTS.map((product) => (
            product.brand==="smk"?
          <Product data={product} />:""
        ))}
        </div>
      
    </div>
  )
}

export default Smk
