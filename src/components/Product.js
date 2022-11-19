import { React, useState } from 'react';
import BackToStoreBtn from './BackToStoreBtn';
import '../App.css';


function Product(props) {

    // we get the product id from the url
    const [productId, setProductId] = useState(
        window.location.pathname.slice(7)
    );

    return(
        <div>
        <BackToStoreBtn />
        {props.productList.map((product) => {
            if(product._id === productId) {
                return(
                    <div key={productId}>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <img src={product.image}></img>
                        <p>{product.description}</p>
                    </div>
                )
            }
        })}
        </div>
    ) 
}
  
export default Product;