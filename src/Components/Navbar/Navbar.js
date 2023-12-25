import { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
    //  set Prop.cartCount to usestate variable;
    //  console.log(props.currentCount==0);
    let [cartCount, setCartCount]= useState(1);
    // setCartCount(props.cartCount)
    
  return (
    <>
      <header>
        <nav>
          <h1>UseReducer</h1>
          <div className="cart">
          <i class="fa-solid fa-cart-plus"></i>
            <p>{props.currentCount}</p>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
