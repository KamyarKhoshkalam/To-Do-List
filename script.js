const addItem = document.querySelector(".item-add");
const form = document.querySelector(".add-form");
const main = document.querySelector("main");
const subButton = form.querySelector("#sub-button");
const items = document.querySelector(".items");

let itemsList = [];

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

const createItem = function (title, description, donestatus) {
  const div = document.createElement("div");
  div.classList.add("item");
  if (donestatus) {
    div.classList.add("done-task");
  }
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
    div.classList.toggle("done-task");

    itemsList.forEach((item) => {
      if (item.title === title && item.description === description) {
        item.done = !item.done;
      }
    });

    localStorage.setItem("todo-items", JSON.stringify(itemsList));
  });
  const edit = document.createElement("button");
  edit.classList.add("btn-edit");
  edit.innerText = "edit";
  const deletetask = document.createElement("button");
  deletetask.classList.add("btn-delete");
  deletetask.innerText = "delete";
  deletetask.addEventListener("click", (e) => {
    itemsList = itemsList.filter((element) => {
      return (
        element.title != e.target.closest(".item").querySelector("h3").innerText
      );
    });
    localStorage.setItem("todo-items", JSON.stringify(itemsList));
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
const save = localStorage.getItem("todo-items");
if (save) {
  itemsList = JSON.parse(save);
  itemsList.forEach((items) =>
    createItem(items.title, items.description, items.done)
  );
}

const showItem = function () {
  itemsList.forEach((element) => {
    createItem(element.title, element.description);
  });
};

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  const titleVal = document.querySelector("#title-add").value.trim();
  const descriptionVal = document.querySelector("#description").value.trim();
  if (!titleVal) {
    alert("please enter some value");
    return;
  }
  itemsList.push({ title: titleVal, description: descriptionVal, done: false });
  localStorage.setItem("todo-items", JSON.stringify(itemsList));
  createItem(titleVal, descriptionVal, false);
  document.querySelector("#title-add").value = "";
  document.querySelector("#description").value = "";
});
