// npm
import { useState } from "react";

// files
import onValidate from "../utils/validateInput";

export default function Input({ validation, setup, state, classname }) {
  // local state
  const [error, setError] = useState("");
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
        onBlur={() => onValidate(validation, getter, setter, setError)}
        onChange={(event) => setter(event.target.value)}
        required={required}
        className={classname}
      />
      <small className="error">{error}</small>
    </div>
  );
}
