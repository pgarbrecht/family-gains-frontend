import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import '../App.css';

// base URL needed
const frontendBaseURL = process.env.REACT_APP_FRONTEND_URL;

const AdminLogin = (props) => {
    
    // use state hook to track what user inputs in admin sign in form
    let [adminInput, setAdminInput] = useState({
        name: '',
        password: '',
    })

    // handle change method for admin sign in form inputs
    const handleAdminChange = (e) => {
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
        window.location.href=`${frontendBaseURL}/admin/dashboard`
    }

    return (
        <>
            <h1 className='text-3xl md:text-4xl text-center pt-12'>Admin Login</h1>
            <p className='text-lg text-center pt-6 pr-8 pl-8 pb-12'>This area is for admins only. To log in, submit your username and password.</p>
            <div className='flex justify-center'>
                <form onSubmit={handleAdminSubmit} className='flex flex-col justify-center items-center border-2 h-[300px] w-[300px] bg-slate-50 rounded-md'>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='mb-2 font-extrabold'>Username</label>
                        <input
                            className='border-2  mb-6 w-[250px] pl-2'
                            id='name'
                            type='text'
                            value={adminInput.name}
                            onChange={handleAdminChange}
                            placeholder='Username'
                        >
                        </input>
                        <label htmlFor='password' className='mb-2 font-extrabold'>Password</label>
                        <input
                            className='border-2  mb-12 w-[250px] pl-2'
                            id='password'
                            type='password'
                            value={adminInput.password}
                            onChange={handleAdminChange}
                            placeholder='Password'
                            >
                        </input> 
                        <input 
                            className='rounded-md w-[100px] bg-familygainsred hover:bg-familygainsdarkred text-white cursor-pointer'
                            type='submit'
                            value='Submit'
                        />   
                    </div>
                </form>
            </div>
        </>
    )
}
  
export default AdminLogin;