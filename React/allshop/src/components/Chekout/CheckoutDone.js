import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Checkout.module.css";

function CheckoutDone(props) {
    useEffect(()=>{
        props.setBasketItem([])
    })
  return (
    <main className={styles.checkoutdone_wrapper}>
        <div className={styles.cd_box}>
            <div className={styles.cd_box_title}>Ваше замовлення принято!</div>
            <div className={styles.cd_box_grid}>
                <span>ПІБ замовника:</span>
                <span>{props.order[0]} {props.order[1]} {props.order[2]}</span>
                <span>Контактний телефон:</span>
                <span>{props.order[3]}</span>
                <span>Спосіб доставки:</span>
                <span>{props.order[7]}</span>
                <span>Адреса доставки:</span>
                <span>{props.order[4]} область, місто/село {props.order[5]}, Відділення №{props.order[6]}</span>
                <span>Дата замовлення</span>
                <span>{props.order[8]}</span>
                <span>Номер замовлення</span>
                <span>{props.order[9]}</span>
            </div>
            <br />
            <div className={styles.lastmessage}>Очікуйте підтвердження замовлення <Link className={styles.backbtn} to={"/"}>На головну</Link></div>
        </div>
    </main>
  )
}

export default CheckoutDone