import React from 'react'
import styles from "./NotFound.module.css"
import image from"./no-found.gif"
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className={styles.main}>
        <div className={styles.left_sec}>
            <p>Йооой</p>
            <p>404</p>
            <p>Сторінку не знайдено</p>
            <div className={styles.btns}>
                <div><Link to={"/"}>Повернутися на головну</Link></div>
                <div><Link to={"/contacts"}>Зв'язатися з нами</Link></div>
            </div>
        </div>
        <div className={styles.right_sec}>
            <img alt='not found' src={image}/>
        </div>

    </main>
  )
}

export default NotFound