import React from 'react'
import { PRODUCTS } from '../../products';
import { Product } from '../shop/product';

const Axor = () => {
  return (
    <div>

        <div className="products">
        {PRODUCTS.map((product) => (
            product.brand==="axor"?
          <Product data={product} />:""
        ))}
      </div>
      
    </div>
  )
}

export default Axor;
