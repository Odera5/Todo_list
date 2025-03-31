/*class Todo {
  constructor(title, description, dueDate, note) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.note = note;
  }
}*/

const main = document.getElementById("main");
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
main.appendChild(inputContainer);
const input1 = document.createElement("input");
input1.placeholder = "Add your items";
input1.classList.add("input1");
inputContainer.appendChild(input1);
const addBtn = document.createElement("button");
addBtn.classList.add("addBtn");
addBtn.textContent = "+";
inputContainer.appendChild(addBtn);

const showProgress = document.createElement("p");
showProgress.classList.add("showProgress");
main.appendChild(showProgress);

let count = 0;
function createTodo() {
  if (input1.value == "") {
    event.preventDefault();
  } else {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todoContainer");
    main.appendChild(todoContainer);
    //todoContainer.textContent = input1.value;
    // todoContainer.contentEditable = "true";

    const todoList = document.createElement("p");
    todoList.classList.add("todoList");
    todoList.textContent = input1.value;
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = "radioID";
    todoContainer.appendChild(radio);

    const BtnContainer = document.createElement("div");
    BtnContainer.classList.add("BtnContainer");
    const editBtn = document.createElement("button");
    editBtn.style.backgroundImage = "url(./pencil.svg)";
    const deleteBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    deleteBtn.classList.add("deleteBtn");
    todoContainer.appendChild(todoList);
    todoContainer.appendChild(BtnContainer);
    BtnContainer.appendChild(editBtn);
    BtnContainer.appendChild(deleteBtn);
    input1.value = "";

    editBtn.addEventListener("click", () => {
      BtnContainer.removeChild(editBtn);
      const checkBtn = document.createElement("button");
      checkBtn.style.backgroundImage = "url(./check.svg)";
      BtnContainer.appendChild(checkBtn);
      BtnContainer.appendChild(deleteBtn);
      checkBtn.classList.add("checkBtn");
      checkBtn.addEventListener("click", () => {
        todoList.contentEditable = "false";
        BtnContainer.removeChild(checkBtn);
        BtnContainer.appendChild(editBtn);
        BtnContainer.appendChild(deleteBtn);
      });

      todoList.contentEditable = "true";
      todoList.focus();
      let range = document.createRange();
      let selection = window.getSelection();

      range.selectNodeContents(todoList);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    });
    deleteBtn.addEventListener("click", () => {
      main.removeChild(todoContainer);
      count--;

      if (count == 0) {
        showProgress.textContent = "";
        count = 0;
      } else if (count < 0) {
        count = 0;
      } else if (count > 0) {
        count = count;
      }
      console.log(count);
      /*showProgress.textContent = `Yayy! you have completed ${count} task. `;
    setTimeout(() => {
      showProgress.textContent = "";
    }, 3000);*/
    });

    radio.addEventListener(
      "click",
      () => {
        count++;
        console.log(count);
        BtnContainer.removeChild(editBtn);
        todoList.style.textDecoration = "line-through";

        showProgress.textContent = `Yayy! you have completed ${count} task. grab your self some shawarma `;
        setTimeout(() => {
          showProgress.textContent = "";
        }, 3000);
      },
      { once: true }
    );
  }
}

addBtn.addEventListener("click", createTodo);
let now = new Date();
let date = now.toDateString();
let time = now.toLocaleTimeString();
console.log(date);
console.log(time);
dayDate = document.getElementById("date");
dayDate.textContent = now.toDateString();
dayTime = document.getElementById("time");
dayTime.textContent = now.toLocaleTimeString();
