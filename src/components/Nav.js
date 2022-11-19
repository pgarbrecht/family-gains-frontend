import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import Logo from '../images/family-gains-logo.png'

function Nav() {
    return (
    <nav>
      <div className='flex justify-between items-center p-4 shadow-under'>
        <Link to="/"><img src={Logo} alt='Family Gains Logo' className='h-[30px] pl-4 '></img></Link>
        <div className='flex justify-evenly'>
            <Link className='flex items-center nav-links pr-8' to="/store">
                <span class="material-symbols-outlined" id="nav-icons">
                    storefront
                </span>
                <p className='hidden sm:flex'>
                    Store
                </p>
            </Link>
            <Link className='flex items-center nav-links pr-8' to="/contact">
            <span class="material-symbols-outlined" id="nav-icons">
                    mail
                </span>
                <p className='hidden sm:flex'>
                    Contact
                </p>
            </Link>
        </div>
      </div>
    </nav>
    )
}
  
export default Nav;
    