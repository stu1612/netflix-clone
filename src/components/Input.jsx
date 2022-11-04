export default function Input({ setup, state, classname }) {
  // properties
  const { type, placeholder, autofocus, required } = setup;
  const { getter, setter } = state;

  return (
    <input
      type={type}
      value={getter}
      placeholder={placeholder}
      autoFocus={autofocus}
      //   onBlur={() => onValidate(validation, getter, setter, setErrorMessage)}
      onChange={(event) => setter(event.target.value)}
      required={required}
      className={classname}
    />
  );
}
