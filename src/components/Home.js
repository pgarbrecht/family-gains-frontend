import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Home() {
    return (
    <div className='flex flex-col-reverse md:flex-row h-screen justify-center items-center'>
        <div className='h-screen md:w-1/2 flex flex-col justify-start sm:justify-evenly items-start p-4 sm:p-16'>
            <h1 className="mb-4 sm:mb-0 text-3xl md:text-4xl lg:text-5xl font-bold font-Montserrat ">Resources to Raise Your Family</h1>
            <div className='mb-4 sm:mb-0 border-2 border-black w-full rounded-xl'></div>
            <p className='mb-4 sm:mb-0 lg:text-xl'>Raising a family is hard. We make it a little easier, with our educational activities and content to help your kids build academic skills, life skills, and positive values all while having fun!</p>
            <button className='mb-4 sm:mb-0 p-4 rounded-full text-white bg-familygainsred hover:bg-familygainsdarkred'><Link to='/store'>View Store</Link></button>
        </div>
        <img className='mt-6 sm:mt-0 h-2/5 md:h-4/5 lg:h-5/5 md:p-16 rounded-full' src='https://i.ibb.co/d5bvggR/homepage-photo.jpg'></img>
    </div>
    )
}
  
export default Home;