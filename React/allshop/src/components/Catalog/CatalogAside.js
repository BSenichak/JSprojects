import React from "react";
import styles from "./Catalog.module.css";
import { useState } from "react";

function CatalogAside(props) {
  const [openCateg, setOpenCateg] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);

  function chooseFilter(i){
      activeCategory.indexOf(i) === -1
        ? (setActiveCategory([...activeCategory, i], props.filterCateg([...activeCategory, i])))
        : setActiveCategory([...activeCategory.filter((o)=>o !== i)], props.filterCateg([...activeCategory.filter((o)=>o !== i)]))
  }

  return (
    <aside>
      <ul>
        {props.categories.map((el) => {
          return (
            <li key={el.id}>
              <span
                onClick={() => {
                  if (openCateg.indexOf(el.id) === -1)
                    setOpenCateg([...openCateg, el.id]);
                  if (openCateg.indexOf(el.id) !== -1)
                    setOpenCateg([...openCateg.filter((i) => i !== el.id)]);
                }}
              >
                {el.categoryName}
              </span>
              <ul
                className={`${styles.sub_category} ${
                  openCateg.indexOf(el.id) === -1 ? styles.open_category : ""
                }`}
              >
                {el.subCategory.map((e) => {
                  return (
                    <li
                      key={el.subCategory.indexOf(e)}
                      onClick={() => chooseFilter(e)}
                      className={activeCategory.indexOf(e) !== -1 ? styles.act_cat: ""}
                    >
                      {e}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default CatalogAside;
