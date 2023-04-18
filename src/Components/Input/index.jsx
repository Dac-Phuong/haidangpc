import React from "react";
import "./style.css";
function Input({ label, title }) {
  return (
    <div className="wrap-inputs">
      <div className="from-input">
        <input className="input" />
        <label className="label">{label}</label>
      </div>
    </div>
  );
}
export default Input;
