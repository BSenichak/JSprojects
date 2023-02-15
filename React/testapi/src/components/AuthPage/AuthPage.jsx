import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, register } from "../../store/auth/authActions";
import s from "./AuthPage.module.css";

export const AuthPage = (props) => {
  const link = useLocation();
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token !== null) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  const regPass = useRef(null);
  const [equal, setEqual] = useState(true);

  return (
    <div className={s.wrapper}>
      <div className={s.registerWrapper}>
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(event)
            dispatch(register(
              event.target[0].value,
              event.target[6].value,
              event.target[5].value,
              {
                firstname: event.target[0].value,
                lastname: event.target[1].value
              }
              ));
          }}>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" />
          <label htmlFor="Surname">Surname</label>
          <input type="text" id="Surname" />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
          <div>
            <input type="radio" name="sex" id="male" />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" name="sex" id="female" />
            <label htmlFor="female">Female</label>
          </div>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={regPass}
            className={!equal ? s.err : ""}
          />
          <label htmlFor="reppassword">Pasword repeat</label>
          <input
            type="password"
            id="reppassword"
            onChange={(e) =>
              e.target.value !== regPass.current.value
                ? setEqual(false)
                : setEqual(true)
            }
            className={!equal ? s.err : ""}
          />
          <input type="submit" id="submit" value={"Register"} />
        </form>
      </div>
      <div className={s.loginWrapper}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(login(event.target[0].value, event.target[1].value));
          }}
        >
          <label htmlFor="emailLogin">Email</label>
          <input type="text" id="emailLogin" />
          <label htmlFor="password">Password</label>
          <input type="password" id="passwordLogin" />
          <button
            id="submitLogin"
            style={{ background: token !== null && "lightgreen" }}
          >
            Login
          </button>
          {loginError !== null && <div>User with this data not found</div>}
        </form>
      </div>
      <div
        className={s.owerlapPanel}
        style={{ left: link.pathname === "/auth/login" ? "15px" : "50%" }}
      >
        <img src="/images/infinity.gif" alt="hahah" />
        <p>
          {link.pathname === "/auth/login"
            ? "If you don't have account let's register"
            : "If you have already account let`s login in"}
        </p>
        <Link to={link.pathname === "/auth/login" ? "register" : "login"}>
          {link.pathname === "/auth/login" ? "Register" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default connect()(AuthPage);
