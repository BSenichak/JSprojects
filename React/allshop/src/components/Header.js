import React, { useState } from "react";
import { GiBee } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import Basket from "./Basket/Basket";

function Header(props) {
  const [basketState, setBasketState] = useState(false);
  return (
    <header className={styles.header}>
      {basketState ? (
        <Basket
          basketState={basketState}
          setBasketState={setBasketState}
          bascetItem={props.bascetItem}
          setBasketItem={props.setBasketItem}
        />
      ) : (
        ""
      )}
      <div className={styles.shop_block}>
        <GiBee />
        <span className={styles.logo_text}>
          <Link to={"/"}>HoBee</Link>
        </span>
        <span className={styles.vline} />
        <span className={styles.nav_item}>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Каталог
          </NavLink>
        </span>
        <span className={styles.nav_item}>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Про магазин
          </NavLink>
        </span>
        <span className={styles.nav_item}>
          <NavLink
            to={"/contacts/#deliver"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Доставка
          </NavLink>
        </span>
        <span className={styles.nav_item}>
          <NavLink
            to={"/contacts"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Контакти
          </NavLink>
        </span>
      </div>
      <div className={styles.client_block}>
        <FiShoppingCart
          onClick={() => {
            setBasketState(!basketState);
          }}
          className={styles.basket_icon}
        />
        {props.bascetItem.length > 0 ? <span className={styles.basket_counter}>{props.bascetItem.length}</span> : ""}
        
        <span className={styles.vline} />
        <img
          alt="user"
          className={styles.user_icon}
          src="https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg"
        />
      </div>
    </header>
  );
}

export default Header;
