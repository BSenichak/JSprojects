import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, setSort } from "../../store/products/productsActions";
import s from "./SortBar.module.css"

export const SortBar = (props) => {
    const dispatch = useDispatch();

  const sortType = useSelector((store) => store.products.sortType);
  const activeCategory = useSelector((store) => store.categories.active);

  return (
    <div className={s.sortBar}>
      <div
        className={`${s.sortBtn} ${sortType === "desc" && s.active}`}
        onClick={
          sortType !== "desc"
            ? () => {
                dispatch(setSort("desc"));
                dispatch(addProduct("desc"));
              }
            : undefined
        }
      >
        First for women
      </div>
      <div
        className={`${s.sortBtn} ${sortType === "asc" && s.active}`}
        onClick={
          sortType !== "asc"
            ? () => {
                dispatch(setSort("asc"));
                dispatch(addProduct("asc", activeCategory));
              }
            : undefined
        }
      >
        First for men
      </div>
    </div>
  );
};

export default connect()(SortBar);
