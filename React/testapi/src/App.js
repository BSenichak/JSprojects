import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Product from "./Product/Product";
import Products from "./Products/Products";
import { Link } from "react-router-dom";


function App() {
  const link = useLocation()
  console.log(link)
  return (
    <div className="App">
      <header><Link to={"/"}>API SHOP</Link></header>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
      <footer>&copy; Senychak Bohdan</footer>
    </div>
    
  );
}

export default App;
