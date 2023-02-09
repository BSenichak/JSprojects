import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../store/product/productActions";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import s from "./Product.module.css"

export const Product = (props) => {
  const dispatch = useDispatch();
  
  const link = useLocation();
  const data = useSelector((store) => store.product.data);

  useEffect(() => {
    dispatch(loadProduct(link.pathname.slice(9)));
  }, [dispatch, link]);

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
              <div className={s.ratingWrapper}>
                <div
                  className={s.rating}
                  style={{ width: `${data.rating.rate * 20}%` }}
                ></div>
              </div>
              <p>{data.rating.rate}</p>
              <p className={s.ratingCount}>count: {data.rating.count}</p>
            </div>
            <div className={s.btn}>ADD TO CART</div>
          </div>
        </div>
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default connect()(Product);
