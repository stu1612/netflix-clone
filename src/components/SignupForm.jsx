// files
import Input from "./Input";
import json from "../JSON/signup.json";

export default function SignupForm({ emailState, passwordState, classStyle }) {
  // properties
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;

  return (
    <div className="form__wrapper">
      <Input
        setup={json.email}
        state={[email, setEmail]}
        classname={classStyle}
      />
      <Input
        setup={json.password}
        state={[password, setPassword]}
        classname={classStyle}
      />
    </div>
  );
}
