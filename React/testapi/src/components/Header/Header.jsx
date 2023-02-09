import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import s from "./Header.module.css"

export const Header = (props) => {
  return (
    <header className={s.header}><Link to={"/"}>
      <img src="/images/logo.png" alt="logo" />
        Fake store
      </Link></header>
  )
}

export default connect()(Header)