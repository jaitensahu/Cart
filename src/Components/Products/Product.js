import "./Product.css";

const Product = (props) => {
  let totalProductCount = 0;
  let totalPrice = 0;
  let totalAmount = 0;
  // Decreasing Product Count
  function decreaseCartCount(e) {
    let proId = e.target.parentElement.parentElement.children[0].innerText;
    let newArr = props.wholeArr.map((ele) => {
      if (ele.id == proId) {
        ele.number -= 1;
      }
      if (ele.number > 0) {
        totalPrice = ele.price * ele.number;
      }
      totalAmount += totalPrice;
      totalProductCount += ele.number;
      return ele;
    });
    console.log(totalAmount);
    props.pushOrremove(newArr);
    props.countChange(totalProductCount, totalAmount);
  }

  //   Increasing Product Count
  function increaseCartCount(e) {
    let proId = e.target.parentElement.parentElement.children[0].innerText;
    let newArr = props.wholeArr.map((ele) => {
      if (ele.id == proId) {
        ele.number += 1;
      }
      if (ele.number > 0) {
        totalPrice = ele.price * ele.number;
      }
      totalAmount += totalPrice;
      totalProductCount += ele.number;
      return ele;
    });
    props.pushOrremove(newArr);
    props.countChange(totalProductCount, totalAmount);
  }
  function removeData(e) {
    let proId = e.target.parentElement.parentElement.parentElement.children[0].innerText;
    
let newArr = props.wholeArr.map((ele) => {
      if (ele.id == proId) {
        ele.number = 0;
      }
      return ele;
    });
    props.pushOrremove(newArr);
  }

  return (
    <>
      <div className="ProductContainer">
        <span id="prodID">{props.id}</span>
        <div className="productData">
          <img src={props.img} alt="" />
          <div className="title-price">
            <h1>{props.title}</h1>
            <p>$ {props.price}</p>

            <span onClick={removeData}>Remove</span>
          </div>
        </div>

        <div className="cartValue">
          <i className="fa-solid fa-angle-up" onClick={increaseCartCount}></i>
          <p>{props.number}</p>
          <i className="fa-solid fa-angle-down" onClick={decreaseCartCount}></i>
        </div>
      </div>
    </>
  );
};
export default Product;
