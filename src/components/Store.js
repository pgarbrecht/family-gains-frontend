import React from 'react';
import ProductPreview from './ProductPreview'
import '../App.css';

const Store = (props) => {
    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl font-bold font-Montserrat pt-12'>Browse Our Store</h1>
            <div className='flex flex-col flex-wrap md:flex-row items-center justify-center mb-20'>
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
            </div>
        </div>
    )
}
  
export default Store;