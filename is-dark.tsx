export default function isDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}