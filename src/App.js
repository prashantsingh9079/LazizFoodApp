import Header from "./components/Layout/Header";
import Meal from "./components/Meal/Meal";
import Cart from "./components/Cart/Cart";
import React,{useState} from "react";

function App() {

  const [cartStatus, setCartStatus] = useState(false);

  function changeStatusNow()
  {
    setCartStatus(true);
  }

  const changeStatusToFalse = () =>{
    setCartStatus(false);
  }

  return (
    <>
    {cartStatus && <Cart closeCart={changeStatusToFalse}/>}
      <Header changeStatus={changeStatusNow} />
      <main>
        <Meal/>
      </main>
    </>
  );
}

export default App;
