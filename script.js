let notStartedTasks = [];
let inProgressTasks = [];
let completedTasks = [];
let COUNT = 0;
const notStartedDiv = document.querySelector(".not-started");
const add = document.querySelectorAll(".add");
let trash = document.querySelectorAll("li");

const todo = document.querySelector(".todo");

Array.from(add).forEach(function (addElement) {
  addElement.addEventListener("click", addTask);
});

addEventListener("click", deleteTask);
// Functions
function addTask(element) {
  COUNT += 1;
  // const task = className.cloneNode(true);
  // arr.push(task);
  // console.log(className.parentElement.className);
  if (element.target.parentNode.className == "bt-not-started") {
    const p = document.createElement("p");
    const li = document.createElement("li");
    // li.textContent("Hello World");
    p.innerHTML = "Not Started";
    p.setAttribute("id", `task${COUNT}`);

    const addLi = document.querySelector(".not-started-li").parentElement;
    li.innerHTML += `<div class="task-icons-container">
                <button class="bt-not-started">
                <ion-icon name="create-outline" class="edit"></ion-icon>
                </button>
                <button class="bt-not-started-trash">
                  <ion-icon name="trash-outline" class="trash"></ion-icon>
                </button>
              </div>`;
    let newInput = li.prepend(p);
    li.className = "not-started-li";

    addLi.prepend(li);
    notStartedTasks.push(li);
  }

  if (element.target.parentNode.className == "bt-in-progress-li") {
    const p = document.createElement("p");
    const li = document.createElement("li");

    // li.textContent("Hello World");
    p.innerHTML = "Not Started";
    p.setAttribute("id", `task${COUNT}`);

    const addLi = document.querySelector(".in-progress-li").parentElement;
    li.innerHTML += `<div class="task-icons-container">
                <button class="bt-in-progress-li">
                <ion-icon name="create-outline" class="edit"></ion-icon>
                </button>
                <button class="bt-in-progress-li">
                  <ion-icon name="trash-outline" class="trash"></ion-icon>
                </button>
              </div>`;
    let newInput = li.prepend(p);
    li.className = "in-progress-li";

    addLi.prepend(li);
  }

  if (element.target.parentNode.className == "bt-completed-li") {
    const p = document.createElement("p");
    const li = document.createElement("li");
    // li.textContent("Hello World");
    p.innerHTML = "Not Started";
    p.setAttribute("id", `task${COUNT}`);

    const addLi = document.querySelector(".completed-li").parentElement;
    li.innerHTML += `<div class="task-icons-container">
                <button class="bt-completed-li">
                <ion-icon name="create-outline" class="edit"></ion-icon>
                </button>
                <button class="bt-completed-li">
                  <ion-icon name="trash-outline" class="trash"></ion-icon>
                </button>
              </div>`;
    let newInput = li.prepend(p);
    li.className = "completed-li";

    addLi.prepend(li);
  }
}

function hi() {
  console.log("Hello");
}
function deleteTask(element) {
  console.log(element.target.parentElement.children);
  // console.log(notStartedTasks);
}

function editTask(className, arr) {
  for (let step = 0; step < arr.length; step++) {
    // Runs 5 times, with values of step 0 through 4.
    if (arr[step].innerHTML == className.innerHTML) {
      arr.splice(step, 1);
    }
  }
}

console.log(notStartedTasks);
