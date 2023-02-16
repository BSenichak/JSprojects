import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  loadCartProduct,
  removeCartItem,
} from "../../store/cart/cartActions";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Order = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const items = useSelector((state) => state.cart.items);
  useEffect(() => {
    dispatch(clearCart());
    cartItems.forEach((el) => dispatch(loadCartProduct(el)));
  }, [cartItems, dispatch]);
  return (
    <div className={s.wrapper}>
      <h1>ORDERING</h1>
      <div className={s.items}>
        {items.map((el) => (
          <div className={s.item} key={el.id}>
            <img src={el.image} alt="sdd" />
            <Link className={s.itemName} to={`/product/${el.id}`}>
              {el.title}
            </Link> 
            <input type="number" defaultValue={0} />
            <div className={s.itemPrice}>{el.price} $</div>
            <BsTrash onClick={() => dispatch(removeCartItem(el.id))} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect()(Order);
