import React from 'react';
import '../App.css';

const Store = (props) => {

        return (
            <>
                <h1>Store</h1>
                {props.productList.map((product, index) => {
                    return(
                        <p key={index} >{product.name}</p>
                    )
                })}
            </>
        )
    // }
}
  
export default Store;