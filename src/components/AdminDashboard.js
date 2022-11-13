import React from 'react';
import '../App.css';

const adminDashboard = (props) => {
    return (
        <>
        <h1>Products To Manage</h1>
        {props.productList.map((product, index) => {
            return(
                <p key={index} >{product.name}</p>
            )
        })}
    </>
    )
}
  
export default adminDashboard;