import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, clearList } from "../store/products/productsActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearData } from "../store/product/productActions";
import { loadCategories } from "../store/categories/categoriesActions";
import Loader from "../Loader/Loader";
import SortBar from "./SortBar/SortBar";
import CategoriesBar from "./CategoriesBar/CategoriesBar";
import s from "./Products.module.css";

export const Products = (props) => {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.products.todos);
  const activeCategory = useSelector((store) => store.categories.active);
  const sortType = useSelector((store) => store.products.sortType);

  useEffect(() => {
    dispatch(clearList());
    dispatch(addProduct(sortType, activeCategory));
    dispatch(loadCategories());
  }, [dispatch, activeCategory, sortType]);

  return (
    <div className={s.wrapper}>
      <SortBar />
      <CategoriesBar />
      <Loader style={{ display: products.length === 0 ? "block" : "none" }} />
      {products.map((el) => (
        <Link
          to={`/product/${el.id}`}
          key={el.id}
          className={s.product}
          onClick={() => dispatch(clearData())}
        >
          <img alt="dd" src={el.image} />
          <h3>{el.title}</h3>
          <h4 className={s.price}>{el.price} $</h4>
        </Link>
      ))}
    </div>
  );
};

export default connect()(Products);
