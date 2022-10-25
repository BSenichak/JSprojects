import React from "react";
import { connect } from "react-redux";
import s from "./Header.module.css";
import {activeWindow} from "../store/actions/headerActions";
import { Link } from "react-router-dom"
import { BsSearch, BsBell, BsCart2, BsFillCaretDownFill } from "react-icons/bs"

export const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>HoBee<div className={s.logoCircle}></div></div>
      <nav>
        <div className={s.linksBar}>
          <Link className={s.pageLink} to={`/`}>Головна сторінка</Link>
          <Link className={s.pageLink} to={`/`}>Про нас</Link>
          <Link className={s.pageLink} to={`/`}>Контакти</Link>
        </div>
        <div className={s.searthBar}>
          <BsSearch/>
          <input type="text" placeholder="Пошук продуктів"/>
        </div>
        <div className={s.userBar}>
          <BsBell/>
          <div className={s.vr}></div>
          <BsCart2/>
          <div className={s.vr}></div>
          <img src={"https://www.showplacerents.com/img/user-placeholder.png"} alt="user" className={s.userImg}/>
         <BsFillCaretDownFill className={s.trBtn}/>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeWindow: state.header.activeWindow,
});

const mapDispatchToProps = (dispatch) => {
  return {
    activeLike: () => dispatch(activeWindow("like")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
