import { React, useState } from 'react';
import BackToStoreBtn from './BackToStoreBtn';
import '../App.css';


const Product = (props) => {

    // We get the product id from the url
    const [productId, setProductId] = useState(
        window.location.pathname.slice(7)
    );

    return(
        <div className='m-12'>
            <BackToStoreBtn />
            <div className='mt-12'>
            {props.productList.map((product) => {
                if(product._id === productId) {
                    return(
                        <div key={productId} className='flex flex-col justify-center items-center'>
                            <h1 className='text-center text-3xl md:text-4xl pb-12'>{product.name}</h1>
                            <img src={product.image} alt={product.name} className='sm:w-[400px] sm:h-[400px] pb-12'></img>
                            <p className='text-center text-3xl md:text-4xl pb-8'>${product.price}</p>
                            <p className='text-center text-lg md:text-xl md:w-3/5 pb-16'>{product.description}</p>
                        </div>
                    )
                }
            })}
            </div>
        </div>
    ) 
}
  
export default Product;