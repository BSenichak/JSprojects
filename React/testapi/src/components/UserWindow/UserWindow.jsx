import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleStateUserWindow } from '../../store/userWindow/userWindowActions'
import s from "./UserWindow.module.css"

export const UserWindow = (props) => {
  const dispatch = useDispatch();

  const autorized = useSelector(store=>store.userWindow.autorized)

  return (
    <div className={s.wrapper}>
       {!autorized?(
        <div className={s.notAuthWrapper}>
          <div className={s.descNotAuth}>If you have an account, login in</div>
          <Link className={s.btnNotAuth} to={"/auth/login"} onClick={()=>dispatch(toggleStateUserWindow())}>LOGIN IN</Link>
          <div className={s.descNotAuth}>If you do not have an account, register</div>
          <Link className={s.btnNotAuth} to={"/auth/register"}  onClick={()=>dispatch(toggleStateUserWindow())}>REGISTER</Link>
        </div>
       ):("auth")}
    </div>
  )
}


export default connect()(UserWindow)