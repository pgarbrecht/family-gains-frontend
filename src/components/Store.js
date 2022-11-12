import React, { useEffect, useState } from 'react';
import '../App.css';

// Define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

function Store() {

    // Product array placeholder we will update using state hook
    let productList = [{
        name: '',
        description: '',
        image: '',
        price: '',
        inStock: ''
    }]
    const [products, setProduct] = useState(productList)

    //Getting products from the database and updating state
    const getProducts = () => {
        var headers = {}
        fetch(baseURL, {
            method : "GET",
            mode: 'cors',
            headers: headers
        })

        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return [];
            }
        })

        .then((data) => {    
            setProduct({
                // grabbing data from db and updating state when components mount
                productList: data.allProducts
            })        
        });
    }

    useEffect(() => {
        getProducts();
    })

    return (
    <>
    <h1>Store</h1>

    {console.log('here is products array: ', products)}

    {products.map((product) => {
        return(
            <p key={product.name} >{product.name}</p>
        )
    })}

    {console.log('here is baseURL:', baseURL)}

    </>
    )
}
  
export default Store;