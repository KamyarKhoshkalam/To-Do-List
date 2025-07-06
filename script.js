const addItem = document.querySelector(".item-add");
const form = document.querySelector(".add-form");
const main = document.querySelector("main");
const subButton = form.querySelector("#sub-button");
const items = document.querySelector(".items");

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

const createItem = function (title, description) {
  const div = document.createElement("div");
  div.classList.add("item");
  const itemTitle = document.createElement("h3");
  itemTitle.innerText = title;
  const itemDescription = document.createElement("p");
  itemDescription.innerText = description;
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div");
  const done = document.createElement("button");
  done.classList.add("btn-done");
  done.innerText = "done";
  done.addEventListener("click", () => {
    if (div.style.textDecoration == "line-through") {
      div.style.textDecoration = "";
      done.innerText = "done";
    } else {
      div.style.textDecoration = "line-through";
      done.innerText = "undone";
    }
  });
  const edit = document.createElement("button");
  edit.classList.add("btn-edit");
  edit.innerText = "edit";
  const deletetask = document.createElement("button");
  deletetask.classList.add("btn-delete");
  deletetask.innerText = "delete";
  deletetask.addEventListener("click", (e) => {
    e.target.closest(".item").remove();
  });
  btnDiv.append(done);
  btnDiv.append(edit);
  btnDiv.append(deletetask);
  div.append(itemTitle);
  div.append(itemDescription);
  div.append(btnDiv);
  items.insertAdjacentElement("afterbegin", div);
};
subButton.addEventListener("click", (e) => {
  e.preventDefault();
  const titleVal = document.querySelector("#title-add").value.trim();
  if (!titleVal) {
    alert("please enter some value");
    return;
  }
});

createItem("ali", "ali task");
createItem("akbar", "akbar task");
