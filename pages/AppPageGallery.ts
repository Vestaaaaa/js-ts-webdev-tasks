interface ImageData {
  photo: string;
}

const DATABASE: ImageData[] = [
  {
    photo: new URL("../assets/image01.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image02.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image03.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image04.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image05.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image06.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image07.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image08.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image09.png", import.meta.url).href,
  },
  {
    photo: new URL("../assets/image10.png", import.meta.url).href,
  },
];

export function AppPageGallery(): HTMLElement {
  const node: HTMLElement = document.createElement("section");
  node.className = "gallery";

  const galleryContainer: HTMLElement = document.createElement("div");

  galleryContainer.className = "gallery-container";

  const nameOfGallery: HTMLElement = document.createElement("h2");
  nameOfGallery.className = "name-of-gallery";
  nameOfGallery.textContent = "HALLOWEEN MEMORIES";
  nameOfGallery.setAttribute("data-i18n", "galleryName");
  node.appendChild(nameOfGallery);

  DATABASE.forEach((item: ImageData) => {
    const galleryComponent: HTMLImageElement = document.createElement("img");
    galleryComponent.className = "gallery-component";
    galleryComponent.src = item.photo;
    galleryComponent.alt = "Gallery Image";
    galleryContainer.appendChild(galleryComponent);
  });

  node.appendChild(galleryContainer);

  return node;
}
