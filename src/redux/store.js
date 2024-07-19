import  { configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import ProductSlice from './ProductSlice'
// import thunk from 'redux-thunk';




export const store = configureStore({
    reducer:{

        user:userSlice,
        article :ProductSlice




        
    },

    // middleware: [thunk]
})

