import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="containerMain">
      <form action="">
        <input type="text" required placeholder="username" />
        <input type="password" required placeholder="password" />
      </form>
    </div>
  );
};

export default Login;
