import React, { useEffect, useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';

const Cosmatics = () => {
    const [cosmatics,setCosmatics]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then((res)=>res.json())
        .then(data=>setCosmatics(data))
    },[])
    return (
        <div>
            <h2>Welcome To Cosmatics Store</h2>
            {
                cosmatics.map(((cosmatic)=><Cosmatic key={cosmatic._id} cosmatic={cosmatic}></Cosmatic>))
            }
        </div>
    );
};

export default Cosmatics;