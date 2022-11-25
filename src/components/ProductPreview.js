import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function ProductPreview(props) {
    return (
    <Link to ={`/store/${props.id}`}>
    <div className='border-2 hover:border-4 hover:border-familygainsdarkred shadow-lg mt-12 ml-12 mr-12 sm:ml-4 sm:mr-8 rounded-lg flex flex-col items-center p-8 sm:w-[350px] sm:h-[350px] hover:cursor-pointer'>
        <h2 key={props.index} className=' text-xl sm:text-3xl '>{props.name}</h2>
        <img src={props.image} className='w-[200px] h-[200px] mt-4 mb-4'></img>
    </div>
    </Link>
    )
}
  
export default ProductPreview;