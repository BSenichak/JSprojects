import React from 'react'
import { connect } from 'react-redux'
import s from "./Footer.module.css"

export const Footer = (props) => {
  return (
    <footer><div className={s.footertext}>© 1488 - {new Date().getFullYear()} HoBee Corporation</div></footer>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)