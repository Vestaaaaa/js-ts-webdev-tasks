import { Heading } from "../main";
import { Paragraph } from "../main";
import { Image } from "./Image";
import { Tags } from "./Tags";

export function createCard(
  title: string,
  description: string,
  tags: { title: string; slug: string }[],
  imageUrl: { name: string; alt: string }
): HTMLElement {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  const imgElement = Image(imageUrl);
  cardElement.appendChild(imgElement);

  const cardText = document.createElement("div"); //создаем контейнер для текста
  cardText.className = "card-text";
  cardElement.appendChild(cardText); //сам контейнер добавляем в CARD

  const titleElement = Heading("h2", title);
  titleElement.className = "card-title";
  cardText.appendChild(titleElement); //добавляем в контейнер для текста ЗАГОЛОВОК

  const descriptionElement = Paragraph(description);
  descriptionElement.className = "card-description";
  cardText.appendChild(descriptionElement); // добавляем в контейнер для текста ОПИСАНИЕ

  const tagsElement = Tags(tags);
  tagsElement.className = "card-tags";
  cardText.appendChild(tagsElement); //добавляем в контейнер ТЭГИ

  return cardElement;
}
