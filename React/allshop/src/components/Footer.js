import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer>
        <div className={styles.footer_section}>
          <span>Компанія</span>
          <span className={styles.red_line} />
          <span>Наші послуги</span>
          <span>Про нас</span>
          <span>Політика конфеденційності</span>
          <span>Партнерська програма</span>
        </div>
        <div className={styles.footer_section}>
          <span>Допомога</span>
          <span className={styles.red_line} />
          <span>FAQ</span>
          <span>Оформлення замовлення</span>
          <span>Пошук товару</span>
          <span>Стан замовлення</span>
        </div>
        <div className={styles.footer_section}>
          <span>Категорії</span>
          <span className={styles.red_line}/>
          <span>Мед</span>
          <span>Рамки</span>
          <span>Вулики</span>
          <span>Засоби догляду за бджолами</span>
        </div>
        <div className={styles.footer_section}>
          <span>Ми в соц-мережах</span>
          <span className={styles.red_line} />
          <div>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
            <span><FaTelegramPlane /></span>
          </div>
        </div>
      </footer>
  )
}

export default Footer