import React from 'react'
import ProductRow from './ProductRow'


function ProductTable(props) {

    const {products} = props
    
    return (
      <div>
                              
          <div class="columns">
            <div class="column">
            Name
                {
            products.map((elem, i) => {
            return <ProductRow key={i} product={elem.name} />;
          })}
            </div>
            <div class="column">
            Price
                {
            products.map((elem, i) => {
            return <ProductRow key={i}  price={elem.price} />;
          })}
            </div>          
          </div>        
        
      </div>
    );
  }

export default ProductTable
