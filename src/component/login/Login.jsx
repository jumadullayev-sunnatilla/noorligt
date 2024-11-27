import React, { useRef } from "react";
import "./Login.scss";
import axios from "axios";
import { useStateValue } from "../../context";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const handleAdminPage = (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
      password: password.current.value,
    };
    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        dispatch({ type: "ADD__TOKEN", payload: res.data.accessToken });
        username.current.value = "";
        password.current.value = "";
        navigate("/admin/createEl");
      })
      .catch((err) => alert("username yoki parol"));
  };
  return (
    <div className="containerMain login">
      <form onSubmit={handleAdminPage} action="" className="login__form">
        <h1 className="login__form-title">Login</h1>
        <input
          ref={username}
          autoComplete="off"
          type="text"
          required
          placeholder="username"
        />
        <input
          ref={password}
          autoComplete="off"
          type="password"
          required
          placeholder="password"
        />
        <button>Sign in</button>
      </form>
      <Link to={"/"}>
        <button className="login__btn">Home</button>
      </Link>
    </div>
  );
};

export default Login;
