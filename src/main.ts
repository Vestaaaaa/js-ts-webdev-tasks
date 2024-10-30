import cardData from "./db/cards.json";
import { createCard } from "./components/Card";

export function Heading(tag = "h1", content: string) {
  const headingElement = document.createElement(tag);
  headingElement.textContent = content;
  headingElement.className = "heading-main";
  return headingElement;
}

export function Paragraph(content: string) {
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = content;
  paragraphElement.className = "paragraph-main";
  return paragraphElement;
}

function createGrid() {
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const mainHeading = Heading("h1", "Our Works");
  const mainDescription = Paragraph(
    "The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit."
  );

  mainContainer.appendChild(mainHeading);
  mainContainer.appendChild(mainDescription);

  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cards-container";
  cardData.forEach((data) => {
    const card = createCard(
      data.heading,
      data.description,
      data.tags,
      data.image
    );
    cardsContainer.appendChild(card);
  });

  mainContainer.appendChild(cardsContainer);
  document.body.appendChild(mainContainer);
}

createGrid();
