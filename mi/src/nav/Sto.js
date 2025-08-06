import{configureStore}from "@reduxjs/toolkit"
import product from "./Crete"
const store=configureStore({
    reducer:{
        cart:product
    }
})
export default store