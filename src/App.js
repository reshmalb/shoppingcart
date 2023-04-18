import { Fragment } from 'react';
import './App.css';
import Header from './Layout/Header';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import ProductList   from './components/Products/ProductList'

function App() {
  const iscartvisible=useSelector((state)=>state.cart.isCartVisible)
    





  return (
    <Fragment>
        <Header />
        {iscartvisible && <Cart/> }
        <ProductList/>
    </Fragment>
     
  );
}

export default App;
