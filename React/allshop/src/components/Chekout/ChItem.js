import React from 'react'
import styles from "./Checkout.module.css";
import { Link } from "react-router-dom"

function ChItem(props) {
  return (
    <div className={styles.item}>
            <div className={styles.image_box}>
              <img alt="tovar in basket " src={props.i.image} />
              <p className={styles.name}><Link to={'/tovar/2'}>{props.i.name}</Link></p>
            </div>
            <div className={styles.item_i}>
                <span>Ціна</span>
                <span className={styles.item_i_p}>{props.i.prise} грн</span>
            </div>
            <div className={styles.item_i}>
                <span>Кількість</span>
                <span>{props.i.count}</span>
            </div>
            <div className={styles.item_i}>
                <span>Сума</span>
                <span>{(props.i.count * props.i.prise).toFixed(2)} грн</span>
            </div>
          </div>
  )
}

export default ChItem