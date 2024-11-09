import { changeLocale } from "../src/main";

export function AppButtonLocalization() {
  const node = document.createElement("button");

  node.textContent = "EN إنإنر";
  node.setAttribute("data-i18n", "switchButton");
  node.classList.add("button");
  node.className = "buttonSwitchLang";
  node.addEventListener("click", changeLocale);
  return node;
}
