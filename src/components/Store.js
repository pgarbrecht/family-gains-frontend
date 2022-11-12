import React, { useState } from 'react';
import '../App.css';

function Store() {

    let productList = [
        {name: 'product 1 name'},
        {name: 'product 2 name'}
    ]
    const [products, setProduct] = useState(productList)

    return (
    <>
    <h1>Store</h1>

    {products.map((product) => {
        return(
        <>
            <p>{product.name}</p>
        </>
        )
    })}

    </>
    )
}
  
export default Store;