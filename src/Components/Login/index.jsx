import React, { useState } from "react";
import Input from "../Input";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  return (
    <div className="container">
      <div className="from-login">
        <h2 className="text-[24px] text-center">Login</h2>
        <form className="from-input" action="POST">
          <Input
            type="username"
            onchange={(e) => setUsername(e.target.value)}
            value={username}
            label={"User Name"}
          />
          <Input label={"PassWord"} />
          <div className="button-login">
            <button className="btn-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
