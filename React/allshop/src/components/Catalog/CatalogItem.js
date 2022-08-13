import React from "react";
import { FiStar, FiPlus } from "react-icons/fi";
import styles from "./CatalogItem.module.css";

function CatalogItem(props) {
  return (
    <div className={styles.item}>
      <div className={styles.image_box}>
        <img
          alt="tovar"
          className={styles.tovar_avatar}
          src={props.item.image}
        />
        <span className={styles.t_by}>
          <FiPlus />
        </span>
        <span className={styles.t_stars}>
          <FiStar /> {props.item.rating}
        </span>
      </div>
      <div className={styles.item_text}>
        <span>{props.item.name}</span>
        <span>{props.item.desc}</span>
        <span>₴ {props.item.prise}</span>
      </div>
    </div>
  );
}

export default CatalogItem;
