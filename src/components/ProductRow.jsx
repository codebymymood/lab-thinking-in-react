import React from 'react'

import ProductTable from './ProductTable'

function ProductRow(props) {

    const {product, price} = props
    return (
        <div className="box">        
            <article className="media">                
                
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{props.product}</strong> <br />
                    <small>{props.price}</small>
                    </p>
                </div>
                </div>
                
            </article>
            </div>    
    )
}

export default ProductRow
