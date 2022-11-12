import React, { useState } from 'react';
import '../App.css';

function Store() {
    const [products, setProducts] = useState([{name: 'product 1 name'},{name: 'product 2 name'}])

    return (
    <>
    <h1>Store</h1>
    {/* <p>Products: {products}</p> */}

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