export function AppPageHero() {
  const node = document.createElement("section");
  node.className = "page-hero";

  let componentsHTML: string = "";
  ["Home", "Gallery", "About Party", "Reservation", "Contacts"].forEach(
    (text: string) => {
      componentsHTML += `<p>${text}</p>`;
    }
  );

  const headerHTML: string = `
  <div class="header-container">
  <img class="logo-img" src="./assets/Party Time!.png" alt="Logo" />
  <div class="header-components">
  ${componentsHTML}
  </div>
  <button class="button-header">Reserve Now</button>
  </div>
  <div class ="performance-time"><h2>31 October 2023</h2></div>
  <div class = "party-name"><h2>It's Halloween Party O'Clock!</h2></div>
  `;
  // Устанавливаем созданный HTML в основное узло секции
  node.innerHTML = headerHTML;

  return node;
}
