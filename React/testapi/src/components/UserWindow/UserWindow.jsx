import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { unLogin } from "../../store/auth/authActions";
import {
  loadRandomUser,
  toggleStateUserWindow,
} from "../../store/userWindow/userWindowActions";
import s from "./UserWindow.module.css";

export const UserWindow = (props) => {
  const dispatch = useDispatch();

  const autorized = useSelector((store) => store.auth.token) !== null;
  const userData = useSelector((state) => state.userWindow.userData);
  const loading = useSelector((state) => state.userWindow.loading);

  useEffect(() => {
    dispatch(loadRandomUser());
  }, [dispatch]);

  return (
    <div className={s.wrapper} onMouseLeave={()=>dispatch(toggleStateUserWindow())}>
      {!autorized ? (
        <div className={s.notAuthWrapper}>
          <div className={s.descNotAuth}>If you have an account, login in</div>
          <Link
            className={s.btnNotAuth}
            to={"/auth/login"}
            onClick={() => dispatch(toggleStateUserWindow())}
          >
            LOGIN IN
          </Link>
          <div className={s.descNotAuth}>
            If you do not have an account, register
          </div>
          <Link
            className={s.btnNotAuth}
            to={"/auth/register"}
            onClick={() => dispatch(toggleStateUserWindow())}
          >
            REGISTER
          </Link>
        </div>
      ) : loading ? (
        <img src="/images/loader.gif" alt="loader"  className={s.loader}/>
      ) : (
        <div className={s.autorizedWrapper}>
          <img src={userData?.picture?.large} alt="img" />
          <p>
            {userData?.name.title} {userData?.name.first} {userData?.name.last}
          </p>
          <div onClick={()=>dispatch(unLogin())}>UNLOGIN</div>
        </div>
      )}
    </div>
  );
};

export default connect()(UserWindow);
