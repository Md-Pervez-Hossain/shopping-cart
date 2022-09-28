import React from 'react';
import { addToDb, removeCart } from '../Utilities/FakeDb';
import "./Cosmatic.css"

const Cosmatic = (props) => {
    const {name,price,_id}=props.cosmatic;
    const addToCartHandler=(_id)=>{
    addToDb(_id)
    }
    const removeCartHandler=(_id)=>{
        removeCart(_id);
    }
    return (
        <div className='product-style'>
            <h2>Product Name : {name}</h2>
            <p>Product price : {price}</p>
            <p>Id : {_id}</p>
            <button onClick={()=>addToCartHandler(_id)}>Add To Cart</button>
            <button onClick={()=>removeCartHandler(_id)}>Remove</button>
        </div>
    );
};

export default Cosmatic;