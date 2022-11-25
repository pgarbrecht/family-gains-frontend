import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Home() {
    return (
    <div className='flex flex-col md:flex-row h-screen items-center'>
        <div className='h-screen md:w-1/2 flex flex-col justify-between sm:justify-evenly items-start p-4 sm:p-16'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Montserrat ">Resources to Raise Your Family</h1>
            <div className='border-2 border-black w-full rounded-xl'></div>
            <p>Raising a family is hard. We make it a little easier, with our educational activities and content to help your kids build academic skills, life skills, and positive values all while having fun!</p>
            <button className=' p-4 rounded-full text-white bg-familygainsred hover:bg-familygainsdarkred'><Link to='/store'>View Store</Link></button>
        </div>
        <img className='h-screen md:h-3/5 lg:h-4/5 xl:h-screen md:w-1/2 p-16 ' src='https://i.ibb.co/jfQpRtg/Screenshot-2022-11-21-at-8-06-21-PM.png'></img>
    </div>
    )
}
  
export default Home;