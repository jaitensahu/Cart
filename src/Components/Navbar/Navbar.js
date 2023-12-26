import "./Navbar.css";

const Navbar = (props) => {
    //  set Prop.cartCount to usestate variable;
  return (
    <>
      <header>
        <nav>
          <h1>UseReducer</h1>
          <div className="cart">
          <i className="fa-solid fa-cart-plus"></i>
            <p>{props.currentCount}</p>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
