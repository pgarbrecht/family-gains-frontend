import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import Logo from '../images/family-gains-logo.png'

function Nav() {
    return (
    <nav>
      <div className='flex justify-between items-center p-4 shadow-under'>
        <Link to="/"><img src={Logo} alt='Family Gains Logo' className='h-[30px] pl-4 '></img></Link>
        <div className='flex justify-evenly pr-4'>
            <Link className='flex items-center nav-links' to="/store">
                <span className="material-symbols-outlined" id="nav-icons">
                    storefront
                </span>
                <p className='hidden sm:flex pr-4'>
                    Store
                </p>
            </Link>
            <Link className='flex items-center nav-links' to="/contact">
            <span className="material-symbols-outlined pl-8" id="nav-icons">
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
    