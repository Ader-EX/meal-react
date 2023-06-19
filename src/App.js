import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartisShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  return (
    <CartProvider className="bg">
      {cartisShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
