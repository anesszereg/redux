import { createSlice } from '@reduxjs/toolkit';
import { data } from '../Data/Data';


export const productSlice = createSlice({

    name: 'product',
    initialState: {
        products: data,
        counter: 0,
        totality:0

    },
    reducers: {
       
        addProduct: (state, action) => {
            state.counter++
            state.totality += action.payload.price
        },
        reset: (state) => {
            state.counter = 0;
            state.totality = 0;
        },
        removeProduct: (state, action) => {
            state.counter--
            state.totality -= action.payload.price
        }
    },

})

export const { addProduct, removeProduct  ,reset } = productSlice.actions

export default productSlice.reducer
