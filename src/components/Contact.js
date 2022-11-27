import React from 'react';
import '../App.css';
import FacebookIcon from '../images/facebook-icon.png';
import InstagramIcon from '../images/instagram-icon.png';

const Contact = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-4xl text-center pb-8'>We'd Love to Hear From You!</h1>
            <h2 className='text-xl md:text-1xl text-center pb-8'>Please email contact@familygains.com or reach us on social</h2>
            <div className='flex'>
                <a href='https://www.facebook.com/FamilyGains/' className='pr-8 hover:brightness-75'><img src={FacebookIcon} id='social-icons'></img></a>
                <a href='https://www.instagram.com/familygainsedu/' className='hover:brightness-75'><img src={InstagramIcon} id='social-icons'></img></a>
            </div>
        </div>
    )
}
  
export default Contact;