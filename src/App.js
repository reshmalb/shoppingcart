import { Fragment, useEffect } from 'react';
import './App.css';
import Header from './Layout/Header';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import ProductList   from './components/Products/ProductList'
import axios from 'axios';
import { UIActions } from './Store/UI-Slice';
import Notification from './components/Notification/Notification';






let initialFetch = true;

function App() {
  const iscartvisible=useSelector((state)=>state.UI.isCartVisible)
  const cart=useSelector((state)=>state.cart)
  const notification=useSelector((state)=>state.UI.notification)
  const dispatch=useDispatch();


  useEffect(()=>{
    const postData=async()=>{
      dispatch(UIActions.showNotification({
        status:'sending',
        title:'sending',
        message:'sending request...'
      }))

     const response=await axios.put('https://fir-login-aea12-default-rtdb.firebaseio.com/shoppingCart.json',cart)
      if(response.statusText==='OK'){
        dispatch(UIActions.showNotification({
          status:'success',
          title:'sucess',
          message:'Cart items  updated successfully ..'
        }))

      }
    }
    if(initialFetch){
      initialFetch=false;
      return;
    }
      
       postData().catch(error=>{
          dispatch(UIActions.showNotification({
            status:'error',
            title:'error..',
            message:'Sending data failed...'
          }))
    
        })

    
     

       

  },[cart,dispatch])


  return (
    <Fragment>
      {notification &&<Notification
               status={notification.status}
               title={notification.title}
               message={notification.message}/>}
        <Header />
        {iscartvisible && <Cart/> }
        <ProductList/>
    </Fragment>
     
  );
}

export default App;
