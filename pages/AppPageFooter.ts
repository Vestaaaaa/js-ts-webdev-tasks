export function AppPageFooter(): HTMLElement {
  const node: HTMLElement = document.createElement("section");
  node.className = "footer-page";

  const template: HTMLTemplateElement = document.createElement("template");
  template.innerHTML = `
        <div class="footer-container">
            <h2  data-i18n = "footerNumber" class="number-footer">PHONE RESERVATION? (+1) 987 46 52</h2>
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

  const clonedContent = template.content.cloneNode(true);

  node.appendChild(clonedContent);

  return node;
}
