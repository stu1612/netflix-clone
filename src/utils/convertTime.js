export default function convertTime(val) {
  const hrs = val / 60;
  const hours = Math.floor(hrs);
  const mins = (hrs - hours) * 60;
  const minutes = Math.round(mins);
  return hours + "hr " + minutes + "mins";
}
