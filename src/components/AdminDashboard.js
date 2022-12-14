import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Modal from "react-modal";
import '../App.css';

// base URLs needed
const frontendBaseURL = process.env.REACT_APP_FRONTEND_URL;
const backendBaseURL = process.env.REACT_APP_BACKEND_URL;

//the approved admin info stored in secret env file
const approvedAdminUsername = process.env.REACT_APP_ADMIN_USERNAME;
const approvedAdminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

//the user's admin info kept in their local storage from last sign in
const adminPersistentInfo = window.localStorage.getItem('adminPersistentInfo');

// react modal styling
const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: "75vw",
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

    // Handle change method for adding a product
    const handleAddChange = (e) => {
        setProductToAdd({
            ...productToAdd,
            [e.target.id]: e.target.value
        })
    }

    // Handle change method for editing a product
    const handleEditChange = (e) => {
        setProductToEdit({
            ...productToEdit,
            [e.target.id]: e.target.value
        })
    }

    // Handle submit method for adding a product
    const handleAddSubmit = (e) => {
        console.log(productToAdd)
        e.preventDefault()
        fetch(`${backendBaseURL}/new`, {
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

        // If we can fetch the data from this route, then proceed
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
            window.location.href=`${frontendBaseURL}/admin/dashboard`
        })
        .catch(err => (console.log(err)))
    }

    // Handle submit method for edited exercise
    const handleEditProduct = (e) => {
        e.preventDefault()
        fetch(`${backendBaseURL}/${productToEdit.id}`, {
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
            window.location.href=`${frontendBaseURL}/admin/dashboard`;
        })
        .catch(err => (console.log(err))) 
    }

    const passExerciseData = (productToEdit) => {
        setProductToEdit({ 
            id: productToEdit._id,
            name: productToEdit.name,
            description: productToEdit.description,
            image: productToEdit.image,
            price: productToEdit.price,
            inStock: productToEdit.inStock,
        })
    }

    // Handle delete product method
    const handleDeleteProduct = (id) => {
        fetch(`${backendBaseURL}/${id}`, {
        method: 'DELETE'
        }).then( response => {
        const findIndex = props.productList.findIndex(product => product._id === id)
        const copyProductList = [...props.productList]
        copyProductList.splice(findIndex, 1)
        props.setState({productList: copyProductList})
        console.log('got to bottom of handle delete');
        }).then(window.location.href=`${frontendBaseURL}/admin/dashboard`)
    }

    const signOut = () => {
        // delete the admin persistent info from local storage
        window.localStorage.removeItem('adminPersistentInfo');
        // redirect back to sign in page
        window.location.href=`${frontendBaseURL}/admin`
    }

    // LOGIC TO ALLOW VIEWING ADMIN DASHBOARD OR NOT
    // If admin had signed in, they will have persistent admin info we can access
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
    // If the admin had signed in with the correct info, they will get to see the admin dashboard (below)

    return (
        <div className='p-12'>
            <button onClick={signOut}
            className='border-2 border-familygainsred hover:border-familygainsdarkred rounded-md text-familygainsred hover:text-familygainsdarkred w-[100px]'
            >Sign Out</button>
            <div className='flex flex-col items-center'>
                <div>
                    <h1 className='text-center text-3xl md:text-4xl pt-8'>Admin Dashboard</h1>
                    <form onSubmit={handleAddSubmit} className='w-[300px] sm:w-[500px]'>
                        <fieldset className='flex flex-col border border-solid border-gray-300 p-3 h-[450px]'>
                            <legend className='text-xl md:text-2xl pt-4'>Add a New Product</legend>
                            <label htmlFor='name' className='font-extrabold'>Product Name</label>
                            <input
                                className='border-2  mb-4 w-[275px] sm:w-[475px] pl-2'
                                id='name'
                                type='text'
                                value={productToAdd.name}
                                onChange={handleAddChange}
                                placeholder='Product Name'
                            >
                            </input>
                            <label htmlFor='description' className='font-extrabold'>Product Description</label>
                            <input
                                className='border-2  mb-4 w-[275px] sm:w-[475px] pl-2'
                                id='description'
                                type='text'
                                value={productToAdd.description}
                                onChange={handleAddChange}
                                placeholder='Product Description'
                                >
                            </input> 
                            <label htmlFor='image' className='font-extrabold'>Product Image URL</label>
                            <input
                                className='border-2  mb-4 w-[275px] sm:w-[475px] pl-2'
                                id='image'
                                type='text'
                                value={productToAdd.image}
                                onChange={handleAddChange}
                                placeholder='Product Image URL'
                            >
                            </input>
                            <label htmlFor='price' className='font-extrabold'>Product Price</label>
                            <input
                                className='border-2  mb-4 w-[275px] sm:w-[475px] pl-2'
                                id='price'
                                type='number'
                                value={productToAdd.notes}
                                onChange={handleAddChange}
                                placeholder='Product Price'
                            >
                            </input>
                            <label htmlFor='inStock' className='font-extrabold'>In Stock?</label>
                            <select
                                className='border-2  mb-4 w-[275px] sm:w-[475px] pl-2'
                                id='inStock'
                                type='text'
                                onChange={handleAddChange}
                                placeholder='inStock'
                            >
                                <option value="none" selected disabled hidden>Choose an option</option>
                                <option value='yes' type='string'>yes</option>
                                <option value='no' type='string'>no</option>
                            </select>
                            <input 
                                className='mt-1 bg-familygainsred hover:bg-familygainsdarkred w-[175px] rounded-md text-white cursor-pointer'
                                type='submit'
                                value='Add New Product'
                            />   
                        </fieldset>
                    </form>
                    <div className='w-[300px] sm:w-[500px]'>
                        <h2 className='text-xl md:text-2xl pt-4 pb-4'>Manage Products</h2>
                        <div className='flex flex-col items-center'>
                            {props.productList.map((product, index) => {
                                return(
                                    <div>
                                        <p key={index} className='text-xl '>{product.name}</p>
                                        <span onClick={() => passExerciseData(product)}><button onClick={setModalOpen} className='bg-familygainsred hover:bg-familygainsdarkred pl-2 pr-2 rounded-md text-white mr-4'>Edit</button></span>
                                        <Modal
                                            isOpen={modalOpen}
                                            onRequestClose={() => setModalOpen(false)}
                                            style={modalStyle}
                                        >
                                            <div className='flex justify-between'>
                                                <h2 className='text-2xl sm:text-3xl'>Edit Product</h2>
                                                <button onClick={() => setModalOpen(false)} className='bg-familygainsred hover:bg-familygainsdarkred pr-2 pl-2 rounded-md h-[30px] text-white'>Exit</button>
                                            </div>
                                            <form onSubmit={handleEditProduct} className='flex flex-col'>
                                                <label htmlFor='name' className='font-extrabold'>Product Name</label>
                                                <input
                                                    className='border-2  mb-2 w-[275px] sm:w-11/12 pl-2'
                                                    id='name'
                                                    type='text'
                                                    value={productToEdit.name}
                                                    onChange={handleEditChange}
                                                >
                                                </input>
                                                <label htmlFor='description' className='font-extrabold'>Product Description</label>
                                                <input
                                                    className='border-2  mb-2 w-[275px] sm:w-11/12 pl-2'
                                                    id='description'
                                                    type='text'
                                                    value={productToEdit.description}
                                                    onChange={handleEditChange}
                                                    >
                                                </input> 
                                                <label htmlFor='image' className='font-extrabold'>Product Image URL</label>
                                                <input
                                                    className='border-2  mb-2 w-[275px] sm:w-11/12 pl-2'
                                                    id='image'
                                                    type='text'
                                                    value={productToEdit.image}
                                                    onChange={handleEditChange}
                                                >
                                                </input>
                                                <label htmlFor='price' className='font-extrabold'>Product Price</label>
                                                <input
                                                    className='border-2  mb-2 w-[275px] sm:w-11/12 pl-2'
                                                    id='price'
                                                    type='number'
                                                    value={productToEdit.price}
                                                    onChange={handleEditChange}
                                                >
                                                </input>
                                                <label htmlFor='inStock' className='font-extrabold'>In Stock?</label>
                                                <select
                                                    className='border-2  mb-2 w-[275px] sm:w-11/12 pl-2'
                                                    id='inStock'
                                                    type='text'
                                                    onChange={handleEditChange}
                                                >
                                                    <option value="none" selected disabled hidden>{productToEdit.inStock}</option>
                                                    <option value='yes' type='text'>yes</option>
                                                    <option value='no' type='text'>no</option>
                                                </select>
                                                <input 
                                                    className='mt-1 bg-familygainsred hover:bg-familygainsdarkred w-[90px] rounded-md text-white cursor-pointer'
                                                    type='submit'
                                                    value='Update'
                                                />   
                                            </form>
                                        </Modal>
                                        <button onClick={()=> {handleDeleteProduct(product._id)}} className='bg-familygainsred hover:bg-familygainsdarkred pl-2 pr-2 rounded-md text-white'>
                                            Delete
                                        </button>
                                        <hr className='w-[300px] sm:w-[500px] mt-2'></hr>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default AdminDashboard;