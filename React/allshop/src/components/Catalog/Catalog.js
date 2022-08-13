import React, { useState } from "react";
import {
  FiSearch,
  FiChevronsDown,
  FiChevronsUp,
  FiStar,
  FiGift,
} from "react-icons/fi";
import styles from "./Catalog.module.css";
import CatalogAside from "./CatalogAside";
import CatalogItem from "./CatalogItem";

function Catalog(props) {
  const [activeCategory, setActiveCategory] = useState(2);
  const [filterCateg, setFilterCateg] = useState([]);

  return (
    <main className={styles.main}>
      <div className={styles.top_bar}>
        <div className={styles.search_bar}>
          <FiSearch />
          <input
            className={styles.g_search}
            placeholder="Пошук товарів за їх назвами тут..."
          />
        </div>
        <div className={styles.sort_btns}>
          <span>Сортувати за:</span>
          <span
            className={`${styles.sort_item} ${
              activeCategory === 1 ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(1)}
          >
            <FiChevronsDown />
            Від дорожчого
          </span>
          <span
            className={`${styles.sort_item} ${
              activeCategory === 2 ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(2)}
          >
            <FiChevronsUp />
            Від дешевшого
          </span>
          <span
            className={`${styles.sort_item} ${
              activeCategory === 3 ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(3)}
          >
            <FiStar />
            Спочатку популярні
          </span>
          <span
            className={`${styles.sort_item} ${
              activeCategory === 4 ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(4)}
          >
            <FiGift />
            Акційні товари
          </span>
        </div>
      </div>
      <CatalogAside
        categories={props.categories}
        filterCateg={setFilterCateg}
        categ={() => filterCateg}
      />
      <div className={styles.results}>
        <div className={styles.result_title}>
          Результат пошуку
          <span>({props.items.length} товари)</span>
        </div>
        <div className={styles.tiles}>
          {filterCateg.length === 0
            ? activeCategory === 1
              ? props.items
                  .sort((a, b) => (a.prise > b.prise ? -1 : 1))
                  .map((item) => {
                    return <CatalogItem key={item.id} item={item} />;
                  })
              : activeCategory === 2
              ? props.items
                  .sort((a, b) => (a.prise > b.prise ? 1 : -1))
                  .map((item) => {
                    return <CatalogItem key={item.id} item={item} />;
                  })
              : activeCategory === 3
              ? props.items
                  .sort((a, b) => (a.rating > b.rating ? -1 : 1))
                  .map((item) => {
                    return <CatalogItem key={item.id} item={item} />;
                  })
              : props.items
                  .sort((a, b) => (a.rating > b.rating ? -1 : 1))
                  .map((item) => {
                    return <CatalogItem key={item.id} item={item} />;
                  })
            : activeCategory === 1
            ? props.items
                .filter((i) => filterCateg.includes(i.category))
                .sort((a, b) => (a.prise > b.prise ? -1 : 1))
                .map((item) => {
                  return <CatalogItem key={item.id} item={item} />;
                })
            : activeCategory === 2
            ? props.items
                .filter((i) => filterCateg.includes(i.category))
                .sort((a, b) => (a.prise > b.prise ? 1 : -1))
                .map((item) => {
                  return <CatalogItem key={item.id} item={item} />;
                })
            : activeCategory === 3
            ? props.items
                .filter((i) => filterCateg.includes(i.category))
                .sort((a, b) => (a.rating > b.rating ? -1 : 1))
                .map((item) => {
                  return <CatalogItem key={item.id} item={item} />;
                })
            : props.items
                .filter((i) => filterCateg.includes(i.category))
                .sort((a, b) => (a.rating > b.rating ? -1 : 1))
                .map((item) => {
                  return <CatalogItem key={item.id} item={item} />;
                })}
        </div>
      </div>
    </main>
  );
}

export default Catalog;
