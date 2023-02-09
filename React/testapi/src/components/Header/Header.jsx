import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { toggleCartState } from "../../store/cart/cartActions";
import Cart from "../Cart/Cart";

export const Header = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cartState);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className={s.header}>
      <div className={s.blank}></div>
      <Link to={"/"}>
        <img src="/images/logo.png" alt="logo" />
        Fake store
      </Link>
      <div className={s.userBar}>
        <div className={s.btn}>
          <BsCart2 onClick={() => dispatch(toggleCartState())} />
          {cartState && <Cart />}
          {cartItems.length !== 0 && (
            <div className={s.cartCounter}>{cartItems.length}</div>
          )}
        </div>
        <div className={s.btn}>
          <FiUser />
        </div>
      </div>
    </header>
  );
};

export default connect()(Header);
