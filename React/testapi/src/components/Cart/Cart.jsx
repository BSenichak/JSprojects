import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  loadCartProduct,
  removeCartItem,
  toggleCartState,
} from "../../store/cart/cartActions";
import s from "./Cart.module.css";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const Items = useSelector((state) => state.cart.items);
  const loading = useSelector((state) => state.cart.loading);
  useEffect(() => {
    dispatch(clearCart());
    cartItems.forEach((el) => dispatch(loadCartProduct(el)));
  }, [cartItems, dispatch]);
  return (
    <div
      className={s.cartWrapper}
      onMouseLeave={() => dispatch(toggleCartState())}
    >
      {cartItems.length === 0 ? (
        <div className={s.emptyWrapper}>
          <img src="/images/empty.gif" alt="cartempty" />
          Here is empty
        </div>
      ) : (
        <div className={s.cartItems}>
          {Items.length !== 0 &&
            Items.map((el) => (
              <div key={el.id} className={s.cartItem}>
                <div className={s.imageBox}>
                  <img src={el.image} alt="cartItem" />
                </div>
                <Link className={s.itemName} to={`/product/${el.id}`}>
                  {el.title}
                </Link>
                <div className={s.price}>
                  {el.price}$
                </div>
                <BsTrash onClick={() => dispatch(removeCartItem(el.id))} />
              </div>
            ))}
          {loading && (
            <img src="/images/loader.gif" alt="loader" className={s.loader} />
          )}
          <div className={s.orderBtn}>TO ORDER!</div>
        </div>
      )}
    </div>
  );
};

export default connect()(Cart);
