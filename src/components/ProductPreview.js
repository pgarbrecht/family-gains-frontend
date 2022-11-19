import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function ProductPreview(props) {
    return (
    <>
        <p key={props.index} >{props.name}</p>
        <img src={props.image}></img>
        <Link to ={`/store/${props.id}`}>
                        <p>
                            View More
                        </p>
        </Link>
    </>
    )
}
  
export default ProductPreview;