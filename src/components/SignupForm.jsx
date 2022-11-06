// npm
import { useState } from "react";

// files
import onValidate from "../utils/validateInput";
import validateString from "../utils/validateString";
import validateEmail from "../utils/validateEmail";
import Input from "./Input";
import json from "../JSON/signup.json";

export default function SignupForm({
  // email,
  // password,
  // setEmail,
  // setPassword,
  emailState,
  passwordState,
  classStyle,
}) {
  // local state
  // const [emailErr, setEmailErr] = useState("");
  // const [passwordErr, setPasswordErr] = useState("");

  // properties
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;

  return (
    <div className="form__wrapper">
      <Input
        setup={json.email}
        state={[email, setEmail]}
        validation={validateEmail}
        classname={classStyle}
      />
      <Input
        setup={json.password}
        state={[password, setPassword]}
        validation={validateString}
        classname={classStyle}
      />
      {/* <div className="input__container"> */}

      {/* <input
          type="email"
          placeholder="Email"
          value={email}
          onBlur={() => onValidate(validateEmail, email, setEmail, setEmailErr)}
          onChange={(e) => setEmail(e.target.value)}
          className={classStyle}
          required
        /> */}
      {/* <small className="error">{emailErr}</small>
      </div>
      <div className="input__container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onBlur={() =>
            onValidate(validateString, password, setPassword, setPasswordErr)
          }
          onChange={(e) => setPassword(e.target.value)}
          className={classStyle}
          required
        />
        <small className="error">{passwordErr}</small>
      </div> */}
    </div>
  );
}
