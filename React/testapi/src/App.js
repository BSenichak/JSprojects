import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Product from "./Product/Product";
import Products from "./Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "./store/cart/cartActions";
import { setAutorizedState } from "./store/userWindow/userWindowActions";
import AuthPage from "./components/AuthPage/AuthPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.localStorage.getItem("cart") !== null &&
      dispatch(setCartItems(JSON.parse(window.localStorage.getItem("cart"))));
    window.localStorage.getItem("authState") !== null
      ? dispatch(setAutorizedState(false))
      : dispatch(
          setAutorizedState(
            JSON.parse(window.localStorage.getItem("authState"))
          )
        );
  },[dispatch]);
  const link = useLocation();
  console.log(link);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/auth/*" element={<AuthPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
