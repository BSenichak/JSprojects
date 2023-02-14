import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../store/product/productActions";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import s from "./Product.module.css";
import { addProductToCart } from "../store/cart/cartActions";

export const Product = (props) => {
  const dispatch = useDispatch();

  const link = useLocation();
  const data = useSelector((store) => store.product.data);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [clientRating, setClientRating] = useState(0);
  const [clientRatingChoosed, setClientRatingChoosed] = useState(0);

  useEffect(() => {
    dispatch(loadProduct(link.pathname.slice(9)));
  }, [dispatch, link, cartItems, data.id]);

  return (
    <div>
      {data.title !== null ? (
        <div className={s.prodWrap}>
          <div className={s.imgBox}>
            <img src={data.image} alt="dd" />
          </div>
          <div className={s.prodText}>
            <h1>{data.title}</h1>
            <div className={s.pricePanel}>
              <h3>{data.category.toUpperCase()}</h3>
              <h3>{data.price} $</h3>
            </div>
            <p>{data.description}</p>
            <div className={s.ratingBar}>
              Rating:
              <div
                className={s.ratingWrapper}
                onMouseMove={(event) =>setClientRating(event.clientX - event.target.getBoundingClientRect().left)}
                onClick={()=>setClientRatingChoosed(clientRating)}
                onMouseLeave={()=>setClientRating(0)}
              >
                <div
                  className={s.rating}
                  style={{ width: `${data.rating.rate * 20}%` }}
                />
                <div className={s.clientRating} style={{width: `${clientRating/2}%`}}/>
                <div className={s.clientRatingChoosed} style={{width: `${clientRatingChoosed/2}%`}}/>
              </div>
              <p>{data.rating.rate}</p>
              <p className={s.ratingCount}>count: {data.rating.count}</p>
            </div>
            <button
              className={`${s.btn} ${
                cartItems.indexOf(data.id) !== -1 ? s.add : ""
              }`}
              onClick={
                cartItems.indexOf(data.id) === -1
                  ? () => dispatch(addProductToCart(data.id))
                  : undefined
              }
            >
              <span className={s.notadded}>ADD TO CART</span>
              <span className={s.added}>ADDED TO CART</span>
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default connect()(Product);
