import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import '../App.css';

function AdminLogin(props) {
    
    // use state hook to track what user inputs in admin sign in form
    let [adminInput, setAdminInput] = useState({
        name: '',
        password: '',
    })

    // handle change method for admin sign in form inputs
    let handleAdminChange = (e) => {
        setAdminInput({
            ...adminInput,
            [e.target.id]: e.target.value
        })
    }

    // this runs when user submits admin sign in form, if correct, then on redirect they will see the admin dashboard, if not then they will stay on this sign in page
    const handleAdminSubmit = (e) => {
        e.preventDefault()
        //set our admin login info to local storage
        window.localStorage.setItem('adminPersistentInfo', JSON.stringify(adminInput));
        // redirect to admin dashboard, and if their login info was correct they will see it
        window.location.href='https://family-gains.herokuapp.com/admin/dashboard'
    }

    return (
    <>
    <h1>Admin Login</h1>
    <p>This area is for admins only. To log in, submit your username and password.</p>
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
    </>
    )
}
  
export default AdminLogin;