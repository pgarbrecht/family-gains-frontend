import React from 'react'
import { Link } from "react-router-dom"

const BackToStoreBtn = () => {
  return (
    <Link
    to='/store'
    className='border-2 border-familygainsred rounded-md text-familygainsred flex justify-start items-center w-[100px]' 
    >
        <span className="material-symbols-outlined" id="back-icon">
            chevron_left
        </span>
        Back
    </Link>
  )
}

export default BackToStoreBtn