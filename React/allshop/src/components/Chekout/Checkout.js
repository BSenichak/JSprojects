import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";
import ChItem from "./ChItem";

function Checkout(props) {
  const [deliver, setDeliver] = useState(0);
  const [surname, setSurname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [tel, setTel] = useState("+380");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState(0);
  const [btntext, setBtnText] = useState(
    "Заповніть всі данні"
  );

  function sumPrice() {
    let summ = 0;
    props.bascetItem.map((el) => {
      summ += Number(el.count) * Number(el.prise);
      return 0;
    });
    return summ.toFixed(2);
  }
  function chek() {
    if (
      deliver !== 0 &&
      surname.length > 0 &&
      firstname.length > 0 &&
      patronymic.length > 0 &&
      tel.length === 13 &&
      region.length > 0 &&
      city.length > 0 &&
      number !== '0'   &&
      props.bascetItem.length > 0
    ) {
      setBtnText(<Link to={"/checkout/done"}>Замовлення підтверджую</Link>);
    } else {
      setBtnText("Заповніть всі данні");
    }
  }

  function send() {
    if (
      deliver !== 0 &&
      surname.length > 0 &&
      firstname.length > 0 &&
      patronymic.length > 0 &&
      tel.length === 13 &&
      region.length > 0 &&
      city.length > 0 &&
      number !== 1 &&
      props.bascetItem.length > 0
    ) {
      setBtnText(<Link to={"/checkout/done"}>Замовлення підтверджую</Link>);

      props.setOrder([
        surname,
        firstname,
        patronymic,
        tel,
        region,
        city,
        number,
        deliver === "30"
          ? "Укр пошта"
          : deliver === "90"
          ? "Нова пошта"
          : "hz",
          new Date().toUTCString(),
          Math.floor(Math.random() * 100000000)
      ]);
    } else {
      setBtnText("Заповніть всі данні");
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.title}>Оформлення замовлення</div>
      <div className={styles.left_sect}>
        <div className={styles.contacts}>
          <p className={styles.contacts_title}>Ваші контактні дані</p>
          <div className={styles.contacts_item}>
            <span>Прізвище</span>
            <br />
            <input
              type="text"
              value={surname}
              onChange={(e) => {
                chek();
                setSurname(e.target.value);
              }}
            />
          </div>
          <div className={styles.contacts_item}>
            <span>Ім'я</span>
            <br />
            <input
              type="text"
              value={firstname}
              onChange={(e) => {
                chek();
                setFirstname(e.target.value);
              }}
            />
          </div>
          <div className={styles.contacts_item}>
            <span>По-батькові</span>
            <br />
            <input
              type="text"
              value={patronymic}
              onChange={(e) => {
                chek();
                setPatronymic(e.target.value);
              }}
            />
          </div>
          <div className={styles.contacts_item}>
            <span>Мобільний телефон</span>
            <br />
            <input
              type="tel"
              value={tel}
              onChange={(e) => {
                chek();
                setTel(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.order}>
          <p className={styles.contacts_title}>Список замовлення</p>
          {props.bascetItem.map((el) => {
            return <ChItem i={el} key={el.id} />;
          })}
        </div>
        <div className={styles.deliver}>
          <p className={styles.contacts_title}>Доставка</p>
          <div
            className={styles.contacts_item_radio}
            onChange={(e) => setDeliver(e.target.value)}
          >
            <input type="radio" name="poshta" value={30} />{" "}
            <span>Нова пошта</span>
            <br />
            <input type="radio" name="poshta" value={90} />{" "}
            <span>Укр пошта</span>
            <br />
          </div>
          <div className={styles.contacts_item}>
            <span>Область</span>
            <br />
            <input
              type="text"
              value={region}
              onChange={(e) => {
                chek();
                setRegion(e.target.value);
              }}
            />
          </div>
          <div className={styles.contacts_item}>
            <span>Місто/Село</span>
            <br />
            <input
              type="text"
              value={city}
              onChange={(e) => {
                chek();
                setCity(e.target.value);
              }}
            />
          </div>
          <div className={styles.contacts_item}>
            <span>Номер відділення</span>
            <br />
            <input
              type="text"
              value={number}
              onChange={(e) => {
                chek();
                setNumber(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.right_sect}>
        <div className={styles.result}>
          <div className={styles.result_title}>Разом</div>
          <div className={styles.reusult_item}>
            <span>{props.bascetItem.length} товари на суму</span>
            <span>{sumPrice()} грн</span>
          </div>
          <div className={styles.reusult_item}>
            <span>Вартість доставки</span>
            <span>{deliver} грн</span>
          </div>
          <div className={styles.hr} />
          <div className={styles.reusult_item}>
            <span>До сплати</span>
            <span>{Number(sumPrice()) + Number(deliver)} грн</span>
          </div>
          <div className={styles.hr} />
          <div className={styles.reusult_item_buy}>
            <div className={styles.reusult_buy_btn} onClick={() => send()}>
              {btntext}
            </div>
            <div className={styles.umovy}>
              Підтверджуючи замовлення, я приймаю умови:
              <ul>
                <li>положення про обробку і захист персональних даних </li>
                <li>угоди користувача</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
