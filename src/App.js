import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Products/Product';
import { useState } from 'react';

function App() {
  const [cartCountChange, setCartCountChange] = useState(4);
  let [totalprice, setTotalAmount]=useState(2495);
  function contChange(currentCount, Amount){
    setCartCountChange(currentCount);
    totalprice=0;
    console.log(Amount);
    setTotalAmount(Amount)
  }
 
  let productArrayOfObj=[
    {
      "id":1,
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "Samsung",
    "price":399,
    "number":1
  },
  {
    "id":2,
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "xaomi",
    "price":399,
    "number":1
  },
  {
    "id":3,
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "oneplus",
    "price":699,
    "number":1
  },
  {
    "id":4,
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "Nokia",
    "price":599,
    "number":1
  },
  {
    "id":5,
    "img":"https://www.course-api.com/images/cart/phone-1.png",
    "title": "Apple",
    "price":399,
    "number":1
  }
]

  const [productArray, setProductArray]=useState([...productArrayOfObj]);
  
  function dataUpdate(newData){
    setProductArray([...newData]);
  }
// let totalprice=0;

  return (
    <div className="App">
     <Navbar currentCount={cartCountChange}/>
    
     <div className="allProductContainer">
     <h1>Your Bag</h1>
    {
      productArray.map(prod=>{
        // totalprice+=prod.price 
        if(prod.number>0) 
        return <Product key={prod.id} countChange={contChange} pushOrremove={dataUpdate} {...prod} wholeArr={productArray}/>
          
      })
      
    }
    {/* {consototalprice); */}
     <hr />
     <div className="totalAmount">
        <h1>Total</h1>
        <h2>${totalprice}</h2>
      </div>
     </div>
      
    </div>
  );
}

export default App;
