export default function validateEmail(email) {
  // const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const regex = /(^[^@.]+)@([^@.]+)\.{1}(\w{1,6}$)/;
  // const validEmail = email.match(pattern);
  const validEmail = email.match(regex);
  const data = validEmail ? validEmail : "";
  const error = !validEmail ? "Please enter a valid email" : "";
  return { data: data, error: error };
}
