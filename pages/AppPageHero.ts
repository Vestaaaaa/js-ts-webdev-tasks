import { AppButtonLocalization } from "./AppButtonLocalization";

export function AppPageHero() {
  const node = document.createElement("section");
  node.className = "page-hero";

  let componentsHTML: string = "";
  const components = [
    { text: "Home", dataI18n: "home" },
    { text: "Gallery", dataI18n: "gallery" },
    { text: "About Party", dataI18n: "aboutParty" },
    { text: "Reservation", dataI18n: "reservation" },
    { text: "Contacts", dataI18n: "contacts" },
  ];

  components.forEach(({ text, dataI18n }) => {
    componentsHTML += `<p data-i18n="${dataI18n}">${text}</p>`;
  });

  const headerHTML: string = `
  <div class="header-container">
   <div class ="logo-partyTime"><h2 data-i18n = "logo">Party Time!</h2></div>
    <div class="header-components">
  ${componentsHTML}
    </div>
    <div class="switcher">${AppButtonLocalization().outerHTML}</div>
   <button data-i18n = "reserveButton" class="button-header">Reserve Now</button>
  </div>

  <div class ="performance-time"><h2 data-i18n = "performanceTime">31 OCTOBER 2023</h2></div>
  <div class = "party-name"><h2 data-i18n = "title">IT'S  HALLOWEEN PARTY O'CLOCK!</h2></div>
  `;
  // Устанавливаем созданный HTML в основное узло секции
  node.innerHTML = headerHTML;

  return node;
}
