import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Modal from "react-modal";
import '../App.css';

// backend url
let baseURL = process.env.REACT_APP_BACKEND_URL;

//the approved admin info stored in secret env file
let approvedAdminUsername = process.env.REACT_APP_ADMIN_USERNAME;
let approvedAdminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

//the user's admin info kept in their local storage from last sign in
let adminPersistentInfo = window.localStorage.getItem('adminPersistentInfo');

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
        inStock: ''
    })

    // Creating variable for product to edit, using hook to manage state
    let [productToEdit, setProductToEdit] = useState({
        id: '',
        name: '',
        description: '',
        image: '',
        price: '',
        inStock: '',
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

    // let signOut = () => {
    //     // delete the admin persistent info from local storage
    //     window.localStorage.removeItem('adminPersistentInfo');
    //     // redirect back to sign in page
    //     window.location.href='http://localhost:3000/admin/'
    // }

    // LOGIC TO ALLOW VIEWING ADMIN DASHBOARD OR NOT
    // if admin had signed in, they will have persistent admin info we can access
    if(adminPersistentInfo){
        // variables for the username and password in their persistent admin info
        let username = JSON.parse(adminPersistentInfo).name;
        let password = JSON.parse(adminPersistentInfo).password;
            // if their persistent admin username or password do not match approved values, redirect to sign in page
            if (username != approvedAdminUsername && password != approvedAdminPassword) {
                 return <Navigate to="/admin" replace />;
            }
    // If there is not any admin persistent info, it means they never signed in so also don't get to see admin dashboard, redirect to sign in page
    } else if(!adminPersistentInfo) {
        return <Navigate to="/admin" replace />;
    }
    // if the admin had signed in with the correct info, they will get to see the admin dashboard (below)

    return (
        <>
        {/* <button onclick={signOut}>Sign Out</button> */}
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
            <select
                id='inStock'
                type='text'
                onChange={handleAddChange}
                placeholder='inStock'
            >
                <option value="none" selected disabled hidden>In Stock?</option>
                <option value='yes' type='string'>yes</option>
                <option value='no' type='string'>no</option>
            </select>
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
                        <select
                            id='inStock'
                            type='text'
                            onChange={handleEditChange}
                            placeholder='inStock'
                        >
                            <option value="none" selected disabled hidden>In Stock?</option>
                            <option value='yes' type='text'>yes</option>
                            <option value='no' type='text'>no</option>
                         </select>
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