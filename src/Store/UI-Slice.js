import { createSlice } from "@reduxjs/toolkit";

const initialUI={isCartVisible:false,
                  notification:null
};
const uiSlice=createSlice({
    name:"UI",
    initialState:initialUI,
    reducers:{
              showCart(state){
                  state.isCartVisible=!state.isCartVisible;  
              },
              showNotification(state,action){
                state.notification={
                    status:action.payload.status,
                    title:action.payload.title,
                    message:action.payload.message,
                }

              }
            }

})

export const UIActions=uiSlice.actions;
export default uiSlice.reducer;

