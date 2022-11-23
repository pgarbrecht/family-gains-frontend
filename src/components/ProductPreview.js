import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function ProductPreview(props) {
    return (
    <div className='border-2 border-familygainsred drop-shadow-sm mt-12 ml-12 mr-12 sm:ml-4 sm:mr-8 rounded-lg flex flex-col items-center p-8 w-[350px] h-[350px]'>
        <p key={props.index} className='text-3xl '>{props.name}</p>
        <img src={props.image} className='w-[150px] h-[150px] mt-4 mb-4'></img>
        <Link to ={`/store/${props.id}`}>
                        <p className='underline text-xl'>
                            View More
                        </p>
        </Link>
    </div>
    )
}
  
export default ProductPreview;