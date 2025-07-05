const addItem = document.querySelector(".item-add");
const form = document.querySelector(".add-form");
const main = document.querySelector("main");
const subButton = form.querySelector("#sub-button");

addItem.addEventListener("click", () => {
  form.classList.toggle("hide");
});

document.querySelector("body").addEventListener("click", (e) => {
  if (
    !e.target.closest(".add-form") &&
    !e.target.classList.contains("item-add")
  ) {
    form.classList.add("hide");
  }
});

console.log(subButton.closest(".add-form"));
subButton.addEventListener("click", (e) => {
  e.preventDefault();
});
