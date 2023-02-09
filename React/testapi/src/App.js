import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Product from "./Product/Product";
import Products from "./Products/Products";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "./store/cart/cartActions";


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setCartItems(JSON.parse(window.localStorage.getItem("cart"))))
  })
  const link = useLocation()
  console.log(link)
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
