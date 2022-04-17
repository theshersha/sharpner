
import {Fragment,useState} from "react";
import Header from "./component/UI/Layout/Header";
import Meals from "./component/UI/Meals/Meals";
import Cart from "./component/Cart";


function App(){
  const [cartIsShow,setCartIsShow]= useState(false);
  
  const showCartHandler = ()=>{
    setCartIsShow(true);
  };

  const hideCartHandler = ()=>{
     setCartIsShow(false);
  }
  return (
     
         <Fragment>
          <Header onShowCart={showCartHandler}/>
         {cartIsShow && <Cart/>}
        <main>
          <Meals/>
        </main>
        </Fragment>
  );   
}
export default App;
