export function AppPageFooter(): HTMLElement {
  // Создаем секцию
  const node: HTMLElement = document.createElement("section");
  node.className = "footer-page";

  // Создаем шаблон
  const template: HTMLTemplateElement = document.createElement("template");
  template.innerHTML = `
        <div class="footer-container">
            <h2 class="number-footer">phone reservation? (+1) 987 46 52</h2>
            <img class="grassFooter-img" src="./assets/Vector.png" alt="Grass Footer" />
            <div class="socialNetworks-footer">
                <img src="./assets/behance.png" alt="Behance" />
                <img src="./assets/Figma.png" alt="Figma" />
                <img src="./assets/Linkedin.png" alt="Figma" />
                <img src="./assets/instagram.png" alt="Figma" />
                <img src="./assets/youtube.png" alt="Figma" />
            </div>
        </div>
    `;

  // Клонируем содержимое шаблона
  const clonedContent = template.content.cloneNode(true);

  // Добавляем клонированное содержимое в секцию
  node.appendChild(clonedContent);

  return node;
}
