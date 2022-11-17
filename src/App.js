import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIShown, setCartIShown] = useState(false);

  const showCartHandler = () => {
    setCartIShown(true);
  };

  const hideCartHandler = () => {
    setCartIShown(false);
  };

  return (
    <CartProvider>
      {cartIShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meal/>
        </main>
    </CartProvider>
  );
}

export default App;
