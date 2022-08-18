import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Tovar.module.css";
import {
  BsCheck2Circle,
  BsCart2,
  BsFillCartFill,
  BsSpeedometer2,
  BsWallet2,
  BsShieldCheck,
} from "react-icons/bs";
import { GiSnail } from "react-icons/gi";

function Tovar(props) {
  const tovId = useParams();
  const [data] = useState(
    props.items.filter((el) => el.id === Number(tovId.id))[0]
  );
  function buyOne() {
    if (props.bascetItem.filter((el) => el.id === data.id).length < 1) {
      props.setBasketItem([
        ...props.bascetItem,
        {
          id: data.id,
          name: data.name,
          prise: data.prise,
          image: data.image,
          count: 1,
        },
      ]);
    }
  }
  function buyOpt() {
    if (props.bascetItem.filter((el) => el.id === data.id).length < 1) {
      props.setBasketItem([
        ...props.bascetItem,
        {
          id: data.id,
          name: data.name,
          prise: data.prise,
          image: data.image,
          count: 10,
        },
      ]);
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.image_section}>
        <img alt="tovimg" src={data.image} className={styles.tovar_img} />
      </div>
      <div className={styles.info_section}>
        <p className={styles.tov_name}>{data.name}</p>
        <p className={styles.haveInStore}>
          <BsCheck2Circle /> Є в наявності
        </p>
        <div className={styles.by_sect}>
          <p className={styles.tov_price}>{data.prise} грн</p>
          <p className={styles.buy_btn} onClick={() => buyOne()}>
            <BsCart2 /> Купити
          </p>
          <p className={styles.buyOpt_btn}  onClick={() => buyOpt()}>
            <BsFillCartFill /> Купити оптом
          </p>
        </div>
        <div className={styles.delivery_sect}>
          <div className={styles.delivery_title}>Доставка:</div>
          <div className={styles.delivery_text}>
            <div>
              <BsSpeedometer2 /> Нова пошта
            </div>
            <div>Очікувати 2-3 дні</div>
            <div>65-95 грн</div>
            <div>
              <GiSnail /> Укр пошта
            </div>
            <div>Очікувати 2-3 тижні</div>
            <div>30-50 грн</div>
          </div>
        </div>
        <div className={styles.money_sect}>
          <BsWallet2 className={styles.icones} />
          <span>
            <b>Оплата.</b> Оплата під час отримання товару, Google Pay,
            Безготівковими для юридичних осіб, Безготівковий для фізичних осіб,
            Apple Pay, PrivatPay.
          </span>
        </div>
        <div className={styles.guarantee_sect}>
          <BsShieldCheck className={styles.icones} />
          <span>
            <b>Гарантія.</b> 12 місяців Обмін/повернення товару впродовж 14 днів{" "}
          </span>
        </div>
      </div>
      <div className={styles.description}>
        <h3>Опис товару</h3>
        <br />
        <div>{data.descFull}</div>
      </div>
      <div className={styles.description}>
        <h3>Відгуки</h3>
        <br />
        <p>В розробці...</p>
      </div>
    </main>
  );
}

export default Tovar;
