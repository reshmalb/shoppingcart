import { Fragment, useEffect } from 'react';
import './App.css';
import Header from './Layout/Header';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import ProductList   from './components/Products/ProductList'
import axios from 'axios';
import { UIActions } from './Store/UI-Slice';
import Notification from './components/Notification/Notification';
import { fetchData } from './Store/DataActions';
import { sendCartData } from './Store/DataActions';






let initialFetch = true;

function App() {
  const iscartvisible=useSelector((state)=>state.UI.isCartVisible)
  const change=useSelector(state=>state.cart.change)
  const cart=useSelector((state)=>state.cart)
  const notification=useSelector((state)=>state.UI.notification)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])


  useEffect(()=>{
    if(initialFetch){

      initialFetch=false;
      return;
    }
    if(change){
      dispatch(sendCartData(cart))

    }
    
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
