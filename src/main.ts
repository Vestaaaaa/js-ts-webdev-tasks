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

import { AppPageHero } from "../pages/AppPageHero";
import { AppPageGallery } from "../pages/AppPageGallery";
import { AppPageFooter } from "../pages/AppPageFooter";

//////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const app: HTMLElement | null = document.getElementById("app");
  if (!app) {
    console.error("Element with id 'app' not found");
    return;
  }

  app.className = "main-container";

  const heroSection: HTMLElement = AppPageHero();
  app.appendChild(heroSection);

  const gallerySection: HTMLElement = AppPageGallery(); // Генерируем галерею
  app.appendChild(gallerySection); // Добавляем галерею в приложение

  const footerSection: HTMLElement = AppPageFooter();
  app.appendChild(footerSection);
});
