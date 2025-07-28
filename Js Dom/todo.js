const addBtn = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const todoItemsContainer = document.getElementById("todo-items-container");
const removeButton = document.getElementById("remove-button");

addBtn.addEventListener("click", function () {
  const value = todoInput.value;

  const li = document.createElement("li"); // <li></li>
  li.innerText = value; // user value in li tag

  const delButton = document.createElement("button");
  delButton.innerText = "X";

  delButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delButton);

  todoItemsContainer.appendChild(li);
  todoInput.value = ""; // append ke baad input khali kr do
});

removeButton.addEventListener("click", function () {
  todoItemsContainer.innerHTML = "";
});
