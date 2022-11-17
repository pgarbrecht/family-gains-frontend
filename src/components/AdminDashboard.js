import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Modal from "react-modal";
import '../App.css';

// backend url
let baseURL = process.env.REACT_APP_BACKEND_URL;
let adminUsername = process.env.REACT_APP_ADMIN_USERNAME;
let adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

// react modal styling
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 400,
    },
  };

const AdminDashboard = (props) => {

    // Using hook for our modal open state
    const [modalOpen, setModalOpen] = useState(false);

    // Creating variable for new product, using hook to manage state
    let [productToAdd, setProductToAdd] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        inStock: true
    })

    // Creating variable for product to edit, using hook to manage state
    let [productToEdit, setProductToEdit] = useState({
        id: '',
        name: '',
        description: '',
        image: '',
        price: '',
        inStock: true
    })

    // handle change method for adding a product
    let handleAddChange = (e) => {
        setProductToAdd({
            ...productToAdd,
            [e.target.id]: e.target.value
        })
    }

    // handle change method for editing a product
    let handleEditChange = (e) => {
        setProductToEdit({
            ...productToEdit,
            [e.target.id]: e.target.value
        })
    }

    // handle submit method for adding a product
    let handleAddSubmit = (e) => {
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
            window.location.href=`https://family-gains.herokuapp.com/admin/dashboard`
        })
        .catch(err => (console.log(err)))
    }

    // handle submit method for edited exercise
    let handleEditProduct = (e) => {
        e.preventDefault()
        fetch(`${baseURL}/${productToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: productToEdit.name,
                description: productToEdit.description,
                image: productToEdit.image,
                price: productToEdit.price,
                inStock: productToEdit.inStock
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } throw new Error(res)
        })
        .then(resJson => {
            window.location.href=`https://family-gains.herokuapp.com/admin/dashboard`;
        })
        .catch(err => (console.log(err))) 
    }

    let passExerciseData = (productToEdit) => {
        setProductToEdit({ 
            id: productToEdit._id,
            name: productToEdit.name,
            description: productToEdit.description,
            image: productToEdit.image,
            price: productToEdit.price,
            inStock: productToEdit.inStock,
        })
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
        }).then(window.location.href=`https://family-gains.herokuapp.com/admin/dashboard/`)
    }

    //is admin is not logged in, send them to login page instead
    //currently works when hardcoding the username + pw, see why process.env version not working -- try console logging them
    //rewrite this to say props.admin.name does not match what is in env, same for password
    if (props.admin.username != adminUsername && props.admin.password != adminPassword) {
        return <Navigate to="/admin" replace />;
    }

    console.log('here is what we get for env un and pw: ', adminUsername, adminPassword)
    console.log('here is what we get for env backend url: ', baseURL)

    return (
        <>
        <h1>Admin Dashboard</h1>
        <h2>Add a New Product</h2>
        <form onSubmit={handleAddSubmit} >
            <input
                id='name'
                type='text'
                value={productToAdd.name}
                onChange={handleAddChange}
                placeholder='Product Name'
            >
            </input>
            <input
                id='description'
                type='text'
                value={productToAdd.description}
                onChange={handleAddChange}
                placeholder='Product Description'
                >
            </input> 
            <input
                id='image'
                type='text'
                value={productToAdd.image}
                onChange={handleAddChange}
                placeholder='Product Image URL'
            >
            </input>
            <input
                id='price'
                type='number'
                value={productToAdd.notes}
                onChange={handleAddChange}
                placeholder='Product Price'
            >
            </input>
            {/* <select
                id='inStock'
                type='boolean'
                onChange={handleAddChange}
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
                <div>
                <p key={index} >{product.name}</p>
                <span onClick={() => passExerciseData(product)}><button onClick={setModalOpen}>edit</button></span>
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    style={customStyles}
                >
                    <h2>Edit Product</h2>
                    <button onClick={() => setModalOpen(false)}>Exit</button>
                    <form onSubmit={handleEditProduct} >
                        <input
                            id='name'
                            type='text'
                            value={productToEdit.name}
                            onChange={handleEditChange}
                            // placeholder={productToEdit.name}
                        >
                        </input>
                        <input
                            id='description'
                            type='text'
                            value={productToEdit.description}
                            onChange={handleEditChange}
                            // placeholder='Product Description'
                            >
                        </input> 
                        <input
                            id='image'
                            type='text'
                            value={productToEdit.image}
                            onChange={handleEditChange}
                            // placeholder='Product Image URL'
                        >
                        </input>
                        <input
                            id='price'
                            type='number'
                            value={productToEdit.price}
                            onChange={handleEditChange}
                            // placeholder='Product Price'
                        >
                        </input>
                        {/* <select
                            id='inStock'
                            type='boolean'
                            onChange={handleAddChange}
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
                            value='Submit Edited Product'
                        />   
                    </form>
                </Modal>
                <button onClick={()=> {handleDeleteProduct(product._id)}}>
                    delete
                </button>
                </div>
            )
        })}
    </>
    )
}
  
export default AdminDashboard;