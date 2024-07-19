


import { createSlice } from "@reduxjs/toolkit";
// import { removeProduct, reset } from "./ProductSlice";


const userSlice = createSlice({
    name:'user',
    initialState:{
        nom:'zereg',
        prenom:"aness",
        credit:2000,
        product:[]
    },
    reducers:{

        payArticle:(state,action)=>{
            state.credit -= action.payload
            state.product = []
            // action.asyncDispatch(reset());
        },
        addArticle:(state,action)=>{
           state.product.push(action.payload)
        //    state.product.id +=1
        },
        removeArticle:(state,action)=>{
            state.product = state.product.filter(product => product.id !== action.payload)
         
        }






    }
})

export const {payArticle , addArticle , removeArticle} = userSlice.actions


export default userSlice.reducer