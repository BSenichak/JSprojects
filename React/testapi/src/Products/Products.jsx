import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, clearList, setSort } from "../store/products/productsActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearData } from "../store/product/productActions";
import {
  loadCategories,
  setActiveCategory,
} from "../store/categories/categoriesActions";

export const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.todos);
  const sortType = useSelector((store) => store.products.sortType);
  const categories = useSelector((store) => store.categories.categories);
  const activeCategory = useSelector((store) => store.categories.active);
  useEffect(() => {
    dispatch(addProduct("asc", activeCategory));
    dispatch(loadCategories());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <div className="sortBar">
        <div
          className={`sortBtn ${sortType === "desc" && "active"}`}
          onClick={() => {
            dispatch(setSort("desc"));
            dispatch(addProduct("desc"));
          }}
        >
          First for women
        </div>
        <div
          className={`sortBtn ${sortType === "asc" && "active"}`}
          onClick={() => {
            dispatch(setSort("asc"));
            dispatch(addProduct("asc", activeCategory));
          }}
        >
          First for men
        </div>
      </div>
      <div className="categories">
        {categories.map((el) => (
          <div
            key={el}
            className={`catBtn ${activeCategory === el && "active"}`}
            onClick={() => {
              dispatch(setActiveCategory(el))
              dispatch(clearList());
              dispatch(addProduct("desc", el));
            }}
          >
            {el.toUpperCase()}
          </div>
        ))}
      </div>
      {
        <div
          className="loader"
          style={{ display: products.length === 0 ? "block" : "none" }}
        >
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      }
      {products.map((el) => (
        <Link
          to={`/product/${el.id}`}
          key={el.id}
          className="product"
          onClick={() => dispatch(clearData())}
        >
          <h3>{el.title}</h3>
          <img alt="dd" src={el.image} />
          <div className="priceBar">
            <h4>{el.category.toUpperCase()}</h4>
            <h4 className="price">{el.price} $</h4>
          </div>
          <div className="desc">{el.description}</div>
        </Link>
      ))}
    </div>
  );
};

export default connect()(Products);
