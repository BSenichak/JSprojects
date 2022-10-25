import React from "react";
import { connect, useDispatch } from "react-redux";
import s from "./Home.module.css";
import { BsFilter } from "react-icons/bs";
import FilterItem from "./FilterItem";
import { clearCateg, setSorting } from "../../store/actions/filterActions";
import FilterSlider from "./FilterSlider/FilterSlider";
import ProductList from "./ProductList/ProductList";

export const Home = (props) => {
  const dispatch = useDispatch();
  return (
    <main className={s.home}>
      <aside>
        <div className={s.asideTitle}>
          <span className={s.asideTitleS}>
            <BsFilter />
            Filter
          </span>
          <span
            className={s.cleanFilterBtn}
            onClick={() => dispatch(clearCateg())}
          >
            Очистити фільтр
          </span>
        </div>
        {props.catTitle.map((el) => {
          return <FilterItem key={el.title} categ={el} />;
        })}
        <FilterSlider />
      </aside>
      <div className={s.content}>
        <div className={s.sortedBar}>
        <div className={s.mainTitle}>Результати пошуку:</div>
          <div className={`${s.sortBtn} ${props.sort === 1 && s.activeSort}`} onClick={()=>dispatch(setSorting(1))}>За популярністю</div>
          <div className={`${s.sortBtn} ${props.sort === 2 && s.activeSort}`} onClick={()=>dispatch(setSorting(2))}>Спочатку дорогі</div>
          <div className={`${s.sortBtn} ${props.sort === 3 && s.activeSort}`} onClick={()=>dispatch(setSorting(3))}>Спочатку дешеві</div>
          <div className={`${s.sortBtn} ${props.sort === 4 && s.activeSort}`} onClick={()=>dispatch(setSorting(4))}>За розміром знижки{props.sort}</div>
        </div>

        <ProductList/>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  catTitle: state.filter.categ,
  activeCateg: state.filter.activeCateg,
  sort: state.filter.sort
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
