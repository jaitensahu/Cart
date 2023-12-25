import { useState } from "react";
import "./Product.css";

const Product = (props) => {
  console.log();
// Decreasing Product Count
  function decreaseCartCount() {
    if (productCount > 0) {
      let updatedVal = productCount - 1;
      setProductCount(updatedVal);
      props.countChange(updatedVal);
    }
    if(productCount==0){
        // props.pushOrremove()
    }
  }
  let [num, setNum]=useState(props.number);
//   Increasing Product Count
  function increaseCartCount(idx) {
    let updatedVal = productCount + 1;
    props.pushOrremove(updatedVal)
    setProductCount(updatedVal);
    props.countChange(updatedVal);
  }

  let [productCount, setProductCount] = useState(1);

  return (
    <>
      <div className="ProductContainer">
        <div className="productData">
          <img
            src={props.img}
            alt=""
          />
          <div className="title-price">
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <span>remove</span>
          </div>
        </div>

        <div className="cartValue">
          <i class="fa-solid fa-angle-up" onClick={increaseCartCount}></i>
          <p>{num}</p>
          <i class="fa-solid fa-angle-down" onClick={decreaseCartCount}></i>
        </div>
      </div>
    </>
  );
};
export default Product;
