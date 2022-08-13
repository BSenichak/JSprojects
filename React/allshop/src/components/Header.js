import React from "react";
import { GiBee } from "react-icons/gi";
import {
  FiSettings,
  FiShoppingCart,
  FiBell
} from "react-icons/fi";
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.shop_block}>
        <GiBee />
        <span className={styles.logo_text}>HoBee</span>
        <span className={styles.vline} />
        <span className={styles.nav_item}>Каталог</span>
        <span className={styles.nav_item}>Про магазин</span>
        <span className={styles.nav_item}>Доставка</span>
        <span className={styles.nav_item}>Контакти</span>
      </div>
      <div className={styles.client_block}>
        <FiSettings />
        <FiBell />
        <FiShoppingCart />
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
