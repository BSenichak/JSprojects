import React from "react";
import styles from "./basket.module.css";
import { MdDeleteForever } from "react-icons/md";

function Item(props) {
  function plusCount() {
    if (props.bascetItem.count < 1) {
      let newCount = 1;
      let newItem = props.bascetItem;
      newItem.count = newCount;
      props.setBasketItem([
        ...props.allItems.filter((i) => i.id !== props.bascetItem.id),
        newItem,
      ]);
    }
    else{
      let newCount = props.bascetItem.count + 1;
      let newItem = props.bascetItem;
      newItem.count = newCount;
      props.setBasketItem([
        ...props.allItems.filter((i) => i.id !== props.bascetItem.id),
        newItem,
      ]);
    }
  }
  function minusCount() {
    if (props.bascetItem.count <= 1) {
        let newCount = 1;
        let newItem = props.bascetItem;
        newItem.count = newCount;
        props.setBasketItem([
          ...props.allItems.filter((i) => i.id !== props.bascetItem.id),
          newItem,
        ]);
      }
      else{
        let newCount = props.bascetItem.count - 1;
        let newItem = props.bascetItem;
        newItem.count = newCount;
        props.setBasketItem([
          ...props.allItems.filter((i) => i.id !== props.bascetItem.id),
          newItem,
        ]);
      }
  }
  function changeCount(e) {
    let newCount = Number(e.target.value);
    let newItem = props.bascetItem;
    newItem.count = newCount;
    props.setBasketItem([
      ...props.allItems.filter((i) => i.id !== props.bascetItem.id),
      newItem,
    ]);
  }
  function deleteItem() {
    props.setBasketItem([
      ...props.allItems.filter((i) => i.id !== props.bascetItem.id),
    ]);
  }

  return (
    <div className={styles.item}>
      <p className={styles.image}>
        <img alt="tovar in basket " src={props.bascetItem.image} />
      </p>

      <p className={styles.name}>{props.bascetItem.name}</p>
      <p className={styles.deletebtn}>
        <MdDeleteForever onClick={() => deleteItem()} />
      </p>
      <p className={styles.countform}>
        <span className={styles.countbtn} onClick={() => plusCount()}>
          +
        </span>
        <input
          value={props.bascetItem.count}
          onChange={(e) => changeCount(e)}
        />
        <span className={styles.countbtn} onClick={() => minusCount()}>
          -
        </span>
      </p>
      <p className={styles.price}>
        {(props.bascetItem.prise * props.bascetItem.count).toFixed(2)} грн
      </p>
    </div>
  );
}

export default Item;
