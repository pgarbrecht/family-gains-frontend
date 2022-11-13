import React from 'react';
import '../App.css';

const Store = (props) => {

        return (
            <>
                <h1>Store</h1>
                {props.productList.map((product, index) => {
                    //only show products in store if they are in stock
                    if(product.inStock) {
                        return(
                            <p key={index} >{product.name}</p>
                        )
                    }
                })}
            </>
        )
    // }
}
  
export default Store;