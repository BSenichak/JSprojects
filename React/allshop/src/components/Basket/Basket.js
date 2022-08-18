import React from "react";
import styles from "./basket.module.css";
import { ImExit } from "react-icons/im";
import gif from "./basket.gif";
import Item from "./Item";
import { Link } from "react-router-dom";

function Basket(props) {
  function sumPrice(){
    let summ = 0;
    props.bascetItem.map((el)=>{
      summ += Number(el.count) * Number(el.prise)
      return 0
    })
    return (summ.toFixed(2))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.basket}>
        <div className={styles.basket_title}>
          <span>Кошик</span>
          <ImExit onClick={() => props.setBasketState(false)} />
        </div>
        <div className={styles.scroller}>
          <div className={styles.basket_list}>
            {props.bascetItem.length > 0 ? (
              <p
                className={styles.clear_all_btn}
                onClick={() => props.setBasketItem([])}
              >
                Очистити кошик
              </p>
            ) : (
              ""
            )}

            {props.bascetItem
              .sort((a, b) => (a.id > b.id ? -1 : 1))
              .map((el) => {
                return (
                  <Item
                    bascetItem={el}
                    setBasketItem={props.setBasketItem}
                    allItems={props.bascetItem}
                    key={el.id}
                  />
                );
              })}
          </div>
          {props.bascetItem.length < 1 ? (
            <div className={styles.clear}>
              <img alt="gifka" src={gif} className={styles.claerimg} />
              <p className={styles.clear_title}>Кошик порожній</p>
              <p className={styles.clear_sub_title}>
                Але це ніколи не пізно виправити :)
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        {props.bascetItem.length > 0 ? (
          <div className={styles.order_sect}>
            <div className={styles.sun_price}>{sumPrice()} <span>₴</span></div>
            <div className={styles.order_btn} onClick={()=>props.setBasketState(false)}><Link to={"/checkout"}>Оформити замовлення</Link></div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={styles.bg}
        onClick={() => props.setBasketState(false)}
      ></div>
    </div>
  );
}

export default Basket;
