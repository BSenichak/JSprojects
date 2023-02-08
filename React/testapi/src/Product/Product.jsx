import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../store/product/productActions";
import { useLocation } from "react-router-dom";

export const Product = (props) => {
  const link = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.product.data);
  useEffect(() => {
    dispatch(loadProduct(link.pathname.slice(9)));
  }, [dispatch, link]);
  return (
    <div>
      {data.title !== null ? (
        <div className="prodWrap">
          <div className="imgBox">
            <img src={data.image} alt="dd" />
          </div>
          <div className="prodText">
            <h1>{data.title}</h1>
            <div className="pricePanel">
              <h3>{data.category.toUpperCase()}</h3>
              <h3>{data.price} $</h3>
            </div>
            <p>{data.description}</p>

            <div className="ratingBar">
              Rating: 
              <div className="ratingWrapper">
                <div
                  className="rating"
                  style={{ width: `${data.rating.rate * 20}%` }}
                ></div>
              </div>
              <p>{data.rating.rate}</p>
              <p className="ratingCount">count: {data.rating.count}</p>
            </div>
            <div className="btn">ADD TO CART</div>
          </div>
        </div>
      ) : (
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      )}
    </div>
  );
};

export default connect()(Product);
