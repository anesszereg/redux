import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCArd from './ShoppingCArd';
import { FaShoppingBasket } from "react-icons/fa";


function Navbar() {


  const response = useSelector((state) => state.user)
  const res = useSelector((state) => state.article)
 

  const [show, setShow] = useState(false)


  return (
    <div style={{ position: 'relative', backgroundColor: '#f8f9fa', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


      <div>Nom:{response.nom}</div>
      <div>Prenom:{response.prenom}</div>
      <div>Credit: {response.credit}</div>
      <div><FaShoppingBasket size={20} onClick={() => setShow(!show)} />{'   ' + res.counter}</div>
      <div>Totality:{'   ' + res.totality}</div>


      {
        show
        &&
        <div style={{ position: 'absolute', right: '200px', top: '45px', backgroundColor: '#fff',
        borderRadius:'20px',
        boxShadow:'0px 0px 10px 0px hsl(221, 100%, 96%)',
        border:'1px solid #ddd',
        width:'400px',
       
        maxHeight:'700px',
        
        }}>

          <ShoppingCArd />
          <div style={{
            height:'100px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <button
            style={{
              padding:'10px 20px',
              backgroundColor:'#007bff',
              color:'#ffff',
              border:'none',
              width:'80%',
              borderRadius:'5px',
              cursor:'pointer',

             




            }}>buy here</button>
          </div>
        </div>
      }

    </div>
  );
}

export default Navbar;
