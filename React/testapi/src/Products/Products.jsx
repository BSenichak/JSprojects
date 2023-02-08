import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/products/productsActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.todos);
  useEffect(() => {
    dispatch(addProduct(""));
  },[dispatch]);
  return (
    <div className="wrapper">
      {
        <div
          className="loader"
          style={{ display: products.length === 0 ? "block" : "none" }}
        >
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      }
      {products.map((el) => (
        <Link to={`/product/${el.id}`} key={el.id} className="product">
          <h3>{el.title}</h3>
          <img alt="dd" src={el.image} />
          <div className="priceBar">
            <h4>{el.category.toUpperCase()}</h4>
            <h4 className="price">{el.price} $</h4>
          </div>
          <div className="desc">{el.description}</div>
        </Link>
      ))}
    </div>
  );
};

export default connect()(Products);
