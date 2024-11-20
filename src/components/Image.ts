export function Image(image: { name: string; alt: string }) {
  const imageElement = document.createElement("img");
  imageElement.src = `src/assets/images/${image.name}`;
  imageElement.alt = image.alt;
  imageElement.className = "card-image";
  return imageElement;
}
