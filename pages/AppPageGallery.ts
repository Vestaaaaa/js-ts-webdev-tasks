interface ImageData {
  photo: string;
}

const DATABASE: ImageData[] = [
  {
    photo: "./assets/image01.png",
  },
  {
    photo: "./assets/image02.png",
  },
  {
    photo: "./assets/image03.png",
  },
  {
    photo: "./assets/image04.png",
  },
  {
    photo: "./assets/image05.png",
  },
  {
    photo: "./assets/image06.png",
  },
  {
    photo: "./assets/image07.png",
  },
  {
    photo: "./assets/image08.png",
  },
  {
    photo: "./assets/image09.png",
  },
  {
    photo: "./assets/image10.png",
  },
];

export function AppPageGallery(): HTMLElement {
  const node: HTMLElement = document.createElement("section");
  node.className = "gallery";

  const galleryContainer: HTMLElement = document.createElement("div");
  galleryContainer.className = "gallery-container";

  const nameOfGallery: HTMLElement = document.createElement("h2");
  nameOfGallery.className = "name-of-gallery";
  nameOfGallery.textContent = "Halloween Memories";

  node.appendChild(nameOfGallery);

  // Создаем до 10 изображений
  DATABASE.forEach((item: ImageData) => {
    const galleryComponent: HTMLImageElement = document.createElement("img");
    galleryComponent.className = "gallery-component";
    galleryComponent.src = item.photo;
    galleryComponent.alt = "Gallery Image"; // Альтернативный текст для изображений
    galleryContainer.appendChild(galleryComponent); // Добавляем изображение в контейнер галереи
  });

  node.appendChild(galleryContainer);

  return node;
}
