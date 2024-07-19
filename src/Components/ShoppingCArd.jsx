import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from "react-icons/fa";
import { removeArticle } from '../redux/userSlice';
import { removeProduct } from '../redux/ProductSlice';
const ShoppingCArd = () => {

    const selectedProduct = useSelector((state) => state.user.product)
    const dispatch = useDispatch()
    return (
        <div style={{
            padding: '10px 20px',


        }}>
            <h4> selected Items :</h4>

            <div style={{
                maxHeight: '500px',
                overflow: 'scroll',
            }}>


                {

                    selectedProduct.length > 0 ? selectedProduct.map((product) => (
                        <div style={{
                            backgroundColor: '#ffff',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            padding: '10px',
                            margin: '10px',
                            width: 'auto',
                            display: 'flex',
                            alignItems: 'start',
                            gap: '30px',
                            overflow: 'scroll',

                        }}>
                            <img src={product.image} alt={product.title} style={{ width: '40%' }} />
                            <div className="">

                                <h3>{product.title}</h3>
                                <p>Price: ${product.price}</p>
                                <div style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'end',
                                    height: "100%",
                                }}>
                                    <FaTrashAlt onClick={() => {
                                        dispatch(removeProduct(product))
                                        dispatch(removeArticle(product.id))
                                    }} />
                                </div>
                            </div>

                        </div>
                    )) :

                        <center> No Items Selected</center>






                    // selectedProduct.map((product)=>(
                    //     <div style={{ backgroundColor:'#ffff',border: '1px solid #ddd', borderRadius: '5px', padding: '10px', margin: '10px', width: '200px', display:'flex' ,alignItems:'center', gap:'30px' }}>
                    //     <img src={product.image} alt={product.title} style={{ width: '40%' }} />
                    //     <div className="">

                    //     <h3>{product.title}</h3>
                    //     <p>Price: ${product.price}</p>
                    //     </div>
                    //     </div>
                    // ))

                }

            </div>




        </div>
    )
}

export default ShoppingCArd
