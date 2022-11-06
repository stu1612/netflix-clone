// npm
import { useState } from "react";

export default function Input({ setup, state, classname }) {
  // local state
  const [error] = useState("");
  // properties
  const { type, placeholder, autofocus, required } = setup;
  const [getter, setter] = state;

  return (
    <div className="input__container">
      <input
        type={type}
        value={getter}
        placeholder={placeholder}
        autoFocus={autofocus}
        onChange={(event) => setter(event.target.value)}
        required={required}
        className={classname}
      />
      <small className="error">{error}</small>
    </div>
  );
}
