export default function slugifyString(string) {
  const lowercase = string.toLowerCase();
  const trim = lowercase.trim();
  const replace = trim.replace(/\s+/g, "-");
  return replace;
}
