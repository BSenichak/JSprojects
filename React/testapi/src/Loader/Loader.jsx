import React from "react";
import { connect } from "react-redux";
import s from "./Loader.module.css"

export const Loader = (props) => {
  return (
    <div className={s.loader} style={props.style}>
      <div className={s.circle}></div>
      <div className={s.circle}></div>
      <div className={s.circle}></div>
      <div className={s.shadow}></div>
      <div className={s.shadow}></div>
      <div className={s.shadow}></div>
    </div>
  );
};

export default connect()(Loader);
