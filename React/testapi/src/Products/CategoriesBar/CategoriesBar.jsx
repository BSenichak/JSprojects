import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../store/categories/categoriesActions";
import { addProduct, clearList } from "../../store/products/productsActions";
import s from "./CategoriesBar.module.css"

export const CategoriesBar = (props) => {
  const dispatch = useDispatch();

  const categories = useSelector((store) => store.categories.categories);
  const activeCategory = useSelector((store) => store.categories.active);

  return (
    <div className={s.categories}>
      {categories.map((el) => (
        <div
          key={el}
          className={`${s.catBtn} ${activeCategory === el && s.active}`}
          onClick={
            activeCategory !== el
              ? () => {
                  dispatch(setActiveCategory(el));
                  dispatch(clearList());
                  dispatch(addProduct("desc", el));
                }
              : undefined
          }
        >
          {el.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default connect()(CategoriesBar);
