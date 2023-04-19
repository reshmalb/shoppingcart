import axios from "axios";
import { UIActions } from "./UI-Slice";
import { cartActions } from "./CartReducer";


export const fetchData=(cart)=>{
    return async(dispatch)=>{
        const fetchExistCartData=async()=>{

            dispatch(UIActions.showNotification({
                status:'sending',
                title:'sending',
                message:'sending request to fetch cart items...'
              }))

            const response=await axios.get('https://fir-login-aea12-default-rtdb.firebaseio.com/shoppingCart.json')
                    if(response.statusText!=='OK') {
                        throw new Error('Fetching Cart data failed...')
                    }  
            const data=response.data;    
            return data;    
        }
        try{
           const cartData= await fetchExistCartData()
           dispatch(cartActions.replaceCart({
            cartdetails:cartData.cartdetails||[],
            totalQuantity:cartData.totalQuantity, 
           }))

        }catch(error){
            dispatch(UIActions.showNotification({
                status:'error',
                title:'error..',
                message:'Sending data failed...'
              }))
        }
    }
}

export const sendCartData=(cart)=>{
    return async(dispatch)=>{     
            dispatch(UIActions.showNotification({
              status:'sending',
              title:'sending',
              message:'sending request...'
            })
            );
           const sendRequest=async() =>{
            const response=await axios.put('https://fir-login-aea12-default-rtdb.firebaseio.com/shoppingCart.json',
            {
             cartdetails:cart.cartdetails,
             totalQuantity:cart.totalQuantity, 
            })

            if(!response.statusText==='OK'){
                throw new Error('Sending data failed')
            }

           }

           try{
              await sendRequest();
              dispatch(UIActions.showNotification({
                status:'success',
                title:'sucess',
                message:'Cart items  updated successfully ..'
              }))
             
           }catch(error){
            dispatch(UIActions.showNotification({
                status:'error',
                title:'error..',
                message:'Sending data failed...'
              }))
           
           }      
     }
 }
    

