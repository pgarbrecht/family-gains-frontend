import React, { useState } from 'react';
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
    // getExercises = () => {
    //     fetch(baseURL)

    //     .then((res) => {
    //         if (res.status === 200) {
    //             return res.json();
    //         } else {
    //             return [];
    //         }
    //     })

    //     .then((data) => {    
    //         this.setState({
    //             // grabbing data from db and updating state when components mount
    //             customExercises: data.allExercises
    //         })        
    //     });
    // }

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

    {console.log('here is baseURL:', baseURL)}

    </>
    )
}
  
export default Store;