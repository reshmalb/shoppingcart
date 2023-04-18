import React from 'react';
import classes from './Header.module.css'
import { cartActions } from '../Store/CartReducer';
import { useSelector,useDispatch } from 'react-redux';
import CartButton from '../components/Cart/CartButton';
const Header = props=> {   


  
  return (
    <div>
      <nav className={classes.header}>
      <div className={classes.header__brand}>
        <h1>Reduxapp</h1>
      </div>   
        <div className={classes.header__cart}>
       <CartButton onClick={props.CartButtonClick}></CartButton>
      </div>
    </nav>
     </div>
  );
};

export default Header;
