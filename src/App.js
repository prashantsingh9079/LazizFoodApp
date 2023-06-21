import Header from "./components/Layout/Header";
import Meal from "./components/Meal/Meal";
import Cart from "./components/Cart/Cart";
import React,{useState} from "react";
import cartProvider from "./store/cartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <cartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal/>
      </main>
    </cartProvider>
  );
}

export default App;
