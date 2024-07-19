import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/ProductSlice';
import { addArticle } from '../redux/userSlice';

function Card({ product, }) {

  const dispatch = useDispatch()
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px', height:'300px'
    ,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
    
    }}>
      <img src={product.image} alt={product.title} style={{ width: '100%',objectFit:'contain' ,height:"150px" }} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button
      style={{
        backgroundColor:'#007bff',
        color:'#ffff',
        padding:'5px 10px',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer',
        float:'right'
      
      }}

        onClick={() => {
          dispatch(addProduct(product)),
          dispatch(addArticle(product))
        }}


      >Add to Item</button>
    </div>
  );
}

export default Card;
