import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Products/Product';
import { useState } from 'react';

function App() {
  const [cartCountChange, setCartCountChange] = useState();
  function contChange(currentCount){
    // console.log(currentCount);
    setCartCountChange(currentCount);
  }
 
  let productArrayOfObj=[
    {
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "Samsung",
    "price":399,
    "number":1
  },
  {
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "xaomi",
    "price":399,
    "number":1
  },
  {
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "oneplus",
    "price":699,
    "number":1
  },
  {
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "Nokia",
    "price":599,
    "number":1
  },
  {
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "Apple",
    "price":399,
    "number":1
  }
]

  const [productArray, setProductArray]=useState([...productArrayOfObj]);
  
  function dataUpdate(newData){
    setProductArray([...productArray, newData]);
    console.log(productArray);
  }


  return (
    <div className="App">
     <Navbar currentCount={cartCountChange}/>
    
     <div className="allProductContainer">
     <h1>Your Bag</h1>
    {
      productArrayOfObj.map(prod=>{
        if(prod.number>0){
          return <Product countChange={contChange} pushOrremove={dataUpdate} {...prod} wholeArr={productArrayOfObj}/>
        }
      })
    }
    
     </div>
    </div>
  );
}

export default App;
