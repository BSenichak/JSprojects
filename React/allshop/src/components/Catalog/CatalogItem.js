import React from "react";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./CatalogItem.module.css";

function CatalogItem(props) {
  return (
    <div className={styles.item}>
      <div className={styles.image_box}>
      <Link to={`/tovar/${props.item.id}`}><img
          alt="tovar"
          className={styles.tovar_avatar}
          src={props.item.image}
        /></Link>
        <span className={styles.t_stars}>
          <FiStar /> {props.item.rating}
        </span>
      </div>
      <div className={styles.item_text}>
        <span><Link to={`/tovar/${props.item.id}`}>{props.item.name}</Link></span>
        <span>{props.item.desc}</span>
        <span>₴ {props.item.prise}</span>
      </div>
    </div>
  );
}

export default CatalogItem;
