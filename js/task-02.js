const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});

ingredientsEl.append(...items);
