import React, { useState } from 'react'
import '../App.css';

let baseURL = process.env.REACT_APP_BACKEND_URL

const AdminDashboard = (props) => {

    // Creating variable for new product, using hook to manage state
    let [productToAdd, setProductToAdd] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        inStock: true
    })

    // handleChange method
    let handleChange = (e) => {
        setProductToAdd({
            ...productToAdd,
            [e.target.id]: e.target.value
        })
    }

    // handleSubmit method
    let handleSubmit = (e) => {
        console.log(productToAdd)
        e.preventDefault()
        fetch(`${baseURL}/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productToAdd.name,
                description: productToAdd.description,
                image: productToAdd.image,
                price: productToAdd.price,
                inStock: productToAdd.inStock
            }),
            credentials: 'include',
        })

        // if we can fetch the data from this route, then proceed
        .then (res => { 
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })

        .then (resJson => {
            setProductToAdd({
                name: '',
                description: '',
                image: '',
                price: '',
                inStock: '',
            }) 
            window.location.href=`http://localhost:3000/admin/dashboard/`
        })
        .catch(err => (console.log(err)))
    }

    let handleDeleteProduct = (id) => {
        fetch(`${baseURL}/${id}`, {
        method: 'DELETE'
        }).then( response => {
        const findIndex = props.productList.findIndex(product => product._id === id)
        const copyProductList = [...props.productList]
        copyProductList.splice(findIndex, 1)
        props.setState({productList: copyProductList})
        console.log('got to bottom of handle delete');
        }).then(window.location.href=`http://localhost:3000/admin/dashboard/`)
    }
    
    return (
        <>
        <h1>Admin Dashboard</h1>
        <h2>Add a New Product</h2>
        <form onSubmit={handleSubmit} >
            <input
                id='name'
                type='text'
                value={productToAdd.name}
                onChange={handleChange}
                placeholder='Product Name'
            >
            </input>
            <input
                id='description'
                type='text'
                value={productToAdd.description}
                onChange={handleChange}
                placeholder='Product Description'
                >
            </input> 
            <input
                id='image'
                type='text'
                value={productToAdd.image}
                onChange={handleChange}
                placeholder='Product Image URL'
            >
            </input>
            <input
                id='price'
                type='number'
                value={productToAdd.notes}
                onChange={handleChange}
                placeholder='Product Price'
            >
            </input>
            {/* <select
                id='inStock'
                type='boolean'
                onChange={handleChange}
                placeholder='inStock'
            >
                <option value="none" selected disabled hidden>In Stock?</option> */}
                {/* <option value='true' type='boolean'>true</option>
                <option value='false' type='boolean'>false</option> */}
                {/* <option value='true' type='boolean'>true</option>
                <option value='false' type='boolean'>false</option> */}
            {/* </select> */}
            {/* <input type="checkbox" /> */}
            <input 
                type='submit'
                value='Add New Product'
            />   
        </form>
        <h2>Manage Existing Products</h2>
        {props.productList.map((product, index) => {
            return(
                <>
                <p key={index} >{product.name}</p>
                <button onClick={()=> {handleDeleteProduct(product._id)}}>
                    delete
                </button>
                </>
            )
        })}
    </>
    )
}
  
export default AdminDashboard;