export function Tags(tagsArr: { title: string; slug: string }[]) {
  const tagsElement = document.createElement("p");
  const tagsText = tagsArr.map((tag) => tag.title.toUpperCase()).join(", ");
  tagsElement.textContent = tagsText;
  return tagsElement;
}
