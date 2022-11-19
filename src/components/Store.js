import React from 'react';
import ProductPreview from './ProductPreview'
import '../App.css';

const Store = (props) => {

        return (
            <>
                <h1>Store</h1>
                {props.productList.map((product, index) => {
                    //only show products in store if they are in stock
                    if(product.inStock === 'yes') {
                        return (
                            <ProductPreview
                            key={index}
                            index={index}
                            id = {product._id}
                            name = {product.name}
                            description = {product.description}
                            image = {product.image}
                            price = {product.price}
                            inStock = {product.inStock}
                            />
                        )
                    }
                })}
            </>
        )
    // }
}
  
export default Store;