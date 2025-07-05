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

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  const titleVal = document.querySelector("#title-add").value.trim();
  if (!titleVal) {
    alert("please enter some value");
    return;
  }
});
