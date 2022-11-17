import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import '../App.css';

function AdminLogin(props) {
    
    // 
    let [adminInput, setAdminInput] = useState({
        name: '',
        password: '',
    })

    // handle change method for adding a product
    let handleAdminChange = (e) => {
        setAdminInput({
            ...adminInput,
            [e.target.id]: e.target.value
        })
    }

    // this runs when user submits admin login, if correct, then on redirect they will see the admin dashboard
    const handleAdminSubmit = (e) => {
        e.preventDefault()
        //set admin props equal to the input by calling our higher order function
        props.updateAdmin(adminInput.name, adminInput.password);
        // improvement idea: can use local storage to store state, then uncomment below to redirect to admin dashboard 
        // window.location.href=`/admin/dashboard`
    }

    return (
    <>
    <h1>Admin Login</h1>
    <p>To log in, submit your username and password, then click the link below</p>
        <form onSubmit={handleAdminSubmit} >
            <input
                id='name'
                type='text'
                value={adminInput.name}
                onChange={handleAdminChange}
                placeholder='Admin Username'
            >
            </input>
            <input
                id='password'
                type='text'
                value={adminInput.password}
                onChange={handleAdminChange}
                placeholder='Admin Password'
                >
            </input> 
            <input 
                type='submit'
                value='Submit'
            />   
        </form>
        <Link to="/admin/dashboard">Log In</Link>
    </>
    )
}
  
export default AdminLogin;