import React from 'react';
import classes from './Header.module.css'
import { cartActions } from '../Store/CartReducer';
import { useSelector,useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
const Header = () => {
    const iscartvisible=useSelector((state)=>state.cart.isCartVisible)
    const dispatch=useDispatch();


      const cartItemsCount = 5; // Replace with the actual number of items in the cart


  const cartVisibleHandler=()=>{
    dispatch(cartActions.visibleCart())

  }

  return (
    <div>
      <nav className={classes.header}>
      <div className={classes.header__brand}>
        <h1>Reduxapp</h1>
      </div>   
        <div className={classes.header__cart}>
        <button  onClick={cartVisibleHandler}>
          Cart
          <span className={classes.header__cartbadge}>{cartItemsCount}</span>
        </button>
      </div>
    </nav>
      {iscartvisible && <CartItem/>}
      </div>
  );
};

export default Header;
