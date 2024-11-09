/* function AppPageHero() {
  const node = document.createElement("section");
  node.className = "page-hero";

  const header = document.createElement("div");
  header.className = "header-container";

  const logo = document.createElement("img");
  logo.className = "logo-img";
  logo.src = "/js-ts-webdev-tasks/assets/Party Time!.png"; // Не забудьте указать правильный путь к логотипу
  logo.alt = "Logo"; // Альтернативный текст для логотипа

  const headerComponents = document.createElement("div");
  headerComponents.className = "header-components";

  // Создаем элементы меню
  const components = ["Home", "Gallery", "About Party", "Reservation"];
  components.forEach((text) => {
    const component = document.createElement("p");
    component.textContent = text;
    headerComponents.appendChild(component);
  });

  const buttonHeader = document.createElement("button");
  buttonHeader.className = "button-header";
  buttonHeader.textContent = "Reserve Now"; // Добавляем текст для кнопки

  // Собираем все вместе
  header.appendChild(logo);
  header.appendChild(headerComponents);
  header.appendChild(buttonHeader);
  node.appendChild(header);

  return node;
} */

import localization from "./localization.json";
import { AppPageHero } from "../pages/AppPageHero";
import { AppPageGallery } from "../pages/AppPageGallery";
import { AppPageFooter } from "../pages/AppPageFooter";
import { AppButtonLocalization } from "../pages/AppButtonLocalization";

let currentLocale: "en" | "ar" = "en";

export function changeLocale() {
  currentLocale = currentLocale === "en" ? "ar" : "en";
  translateAllTextOnPage();
}

function translateAllTextOnPage() {
  const localeMessages = localization[currentLocale];
  const elementsForTranslation = document.querySelectorAll("[data-i18n]");
  elementsForTranslation.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerText = localeMessages[key];
  });
}

//////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const app: HTMLElement | null = document.getElementById("app");
  app.className = "app-container";
  if (!app) {
    console.error("Element with id 'app' not found");
    return;
  }

  const heroSection: HTMLElement = AppPageHero();
  app.appendChild(heroSection);

  const switcher = heroSection.querySelector(".switcher");
  switcher.addEventListener("click", changeLocale);

  /*const switchButton: HTMLElement = AppButtonLocalization();
  switchButton.setAttribute("data-i18n", "switchButton");
  heroSection.appendChild(switchButton);
  switchButton.addEventListener("click", changeLocale); */

  const gallerySection: HTMLElement = AppPageGallery();
  app.appendChild(gallerySection);

  const footerSection: HTMLElement = AppPageFooter();
  app.appendChild(footerSection);

  console.log(localization);
});
