function Heading(tag = "h1", content) {
  const heading = document.createElement(tag);
  heading.textContent = content;

  return heading;
}

////////

function createButton(text, background, border) {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.background = background;
  button.style.border = border;
  button.className = "custom-button";

  return button;
}

///////

function createCard(title, description, buttonText, cardClass, buttonClass) {
  const card = document.createElement("div");
  card.className = `card ${cardClass}`;

  const headingDiv = document.createElement("div");
  headingDiv.className = `heading-${cardClass}`;
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;
  headingDiv.appendChild(cardTitle);
  card.appendChild(headingDiv);

  const paragraphDiv = document.createElement("div");
  paragraphDiv.className = `paragraph-${cardClass}`;
  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;
  paragraphDiv.appendChild(cardDescription);
  card.appendChild(paragraphDiv);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = `button-${cardClass}`;
  //const button = document.createElement("button");
  //button.className = `explore-btn ${buttonClass}`;
  //button.textContent = buttonText;
  const button = createButton(
    buttonText,
    buttonClass === "white-button" ? "white" : "#25DAC5",
    "0px solid white"
  );
  buttonDiv.appendChild(button);
  card.appendChild(buttonDiv);

  return card;
}

////////

function createGrid() {
  const grid = document.createElement("div");
  grid.className = "grid";

  const cardData = [
    {
      title: "Startup Framework",
      description:
        "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
      buttonText: "Explore",
      cardClass: "first-card",
      buttonClass: "white-button",
    },
    {
      title: "Web Generator",
      description:
        "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
      buttonText: "Explore",
      cardClass: "second-card",
      buttonClass: "green-button",
    },
    {
      title: "Slides 4",
      description:
        "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
      buttonText: "Explore",
      cardClass: "third-card",
      buttonClass: "white-button",
    },
    {
      title: "Postcards",
      description:
        "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
      buttonText: "Explore",
      cardClass: "fourth-card",
      buttonClass: "white-button",
    },
  ];

  cardData.forEach((data) => {
    const card = createCard(
      data.title,
      data.description,
      data.buttonText,
      data.cardClass,
      data.buttonClass
    );
    grid.appendChild(card);
  });

  return grid;
}

////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const h1 = Heading("h1", "Last works");
  const tagDiv = document.createElement("div");
  tagDiv.className = "heading-main";
  tagDiv.appendChild(h1);

  //document.body.appendChild(h1); //добавляем наш h1

  const grid = createGrid();

  const app = document.getElementById("app");
  app.className = "main-container";

  app.appendChild(tagDiv);
  app.appendChild(grid);
  document.body.appendChild(app);
});
