import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import UIReducer from './UI-Slice'



const store=configureStore({
    reducer:{cart:CartReducer,
             UI:UIReducer}
})
export default store;