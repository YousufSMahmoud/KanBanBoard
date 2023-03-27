const columns = [
  {
    id: 0,
    tasks: [],
  },
  {
    id: 1,
    tasks: [],
  },
  {
    id: 2,
    tasks: [],
  },
];
let index = 0;
let allInput = document.querySelectorAll(".tasks-input");

function addTaskToHTML(id, value) {
  let zero = document.getElementById(0);
  let one = document.getElementById(1);
  let two = document.getElementById(2);
  const taskInput = document.createElement("div");
  taskInput.draggable = "true";
  const input = document.createElement("input");
  const iconsContainer = document.createElement("div");
  iconsContainer.className = "icons-container";
  const editButton = document.createElement("button");
  editButton.className = "btn-edit";
  const trashButton = document.createElement("button");
  trashButton.className = "btn-trash";

  editButton.innerHTML += `<ion-icon name="create-outline" class="edit"></ion-icon>`;
  trashButton.innerHTML += `<ion-icon name="trash-outline" class="trash"></ion-icon>
  `;

  taskInput.className = "task";
  input.type = "text";
  // input.draggable = "true";
  input.className = "tasks-input";
  input.id = "tasks-input";

  input.value = value;
  taskInput.style.cursor = "auto";
  iconsContainer.append(editButton);
  iconsContainer.append(trashButton);

  taskInput.append(input);
  taskInput.append(iconsContainer);
  // console.log(taskInput);
  if (id == 0) {
    zero.append(taskInput);
  }

  if (id == 1) {
    one.append(taskInput);
  }

  if (id == 2) {
    two.append(taskInput);
  }
}

let data = [];

if (window.localStorage.data) {
  data = JSON.parse(localStorage.data);
  for (i of data) {
    addTaskToHTML(i.parentId, i.title);
  }
}

number = 1;

const trashBtn = document.getElementsByClassName(".btn-trash");
let tasksList = document.querySelectorAll(".tasks-list");
const container = document.querySelector(".container");
let dragContainer = document.querySelectorAll(".column");
let addTaskBtn = document.querySelectorAll(".button-add");

let columnId = document.querySelectorAll(".column");

columns.forEach((column) => {
  let tasksList = document.querySelectorAll(".tasks-list")[column.id];
  let addTaskBtn = document.querySelectorAll(".button-add")[column.id];

  addTaskBtn.addEventListener("click", (foo) => {
    const taskInput = document.createElement("div");
    const input = document.createElement("input");
    const iconsContainer = document.createElement("div");
    iconsContainer.className = "icons-container";
    const editButton = document.createElement("button");
    editButton.className = "btn-edit";
    const trashButton = document.createElement("button");
    trashButton.className = "btn-trash";

    editButton.innerHTML += `<ion-icon name="create-outline" class="edit"></ion-icon>`;
    trashButton.innerHTML += `<ion-icon name="trash-outline" class="trash"></ion-icon>
    `;

    taskInput.className = "task";
    taskInput.draggable = "true";
    // taskInput.cursor = "pointer";
    input.type = "text";
    // input.draggable = "true";
    input.className = "task-input";
    // taskInput.style.cursor = "pointer";
    iconsContainer.append(editButton);
    iconsContainer.append(trashButton);
    taskInput.append(input);
    taskInput.append(iconsContainer);
    tasksList.append(taskInput);
    // console.log(tasksList, "hi");
    // data.push(taskInput.outerHTML);
    addTask(column.id);
    save();
    // updateData();

    number++;
    allInput = document.querySelectorAll(".tasks-input");

    // if (input.value != "") {
    //   console.log(input.value);
    // }
  });
});

// function removeTaskEvent() {
[...tasksList].forEach((t) => {
  if (t.firstChild != null) {
    t.addEventListener("click", (e) => {
      if (e.target.classList.contains("trash")) {
        // d.push(
        //   JSON.stringify(e.target.parentElement.parentElement.parentElement)
        // );
        localStorage.removeItem(
          e.target.parentElement.parentElement.parentElement
        );

        data = data.filter(
          (a) =>
            a.title !=
            e.target.parentElement.parentElement.parentElement.firstChild.value
        );

        e.target.parentElement.parentElement.parentElement.remove();
        save();
      }
    });
  }
});
// }
// removeTaskEvent();
// local storage

function read() {
  const data = localStorage.getItem("data");
  if (data == null) {
    return [
      {
        id: 0,
        tasks: [],
      },
      {
        id: 1,
        tasks: [],
      },
      {
        id: 2,
        tasks: [],
      },
    ];
  }

  return JSON.parse(data);
}

function save() {
  window.localStorage.setItem("data", JSON.stringify(data));
}

function updateData() {
  let data = window.localStorage.data;
}

function addTask(id) {
  let zero = document.getElementById(0);
  let one = document.getElementById(1);
  let two = document.getElementById(2);

  if (id == 0) {
    helperForAddTask(zero);
  }

  if (id == 1) {
    helperForAddTask(one);
  }

  if (id == 2) {
    helperForAddTask(two);
  }
}

function dragIndex(task, parentId) {
  if (parentId == 0) {
    task.index = index;
  }
  if (parentId == 1) {
    task.index = index;
  }
  if (parentId == 2) {
    task.index = index;
  }
  index++;
}
function helperForAddTask(tasks) {
  for (i of tasks.children) {
    if (ifTitleInData(i)) {
      const task = {
        id: `task-${number}`,
        title: i.firstChild.value,
        parentId: i.parentElement.id,
      };

      // console.log(task);
      if (task.title != undefined) {
        dragIndex(i, +i.parentId);

        data.push(task);
      }
    }
  }
}

function ifTitleInData(input, id) {
  if (input.firstChild.value == "" || input.firstChild.value == undefined) {
    return false;
  }
  if (data.map((a) => a.title).includes(input.firstChild.value)) {
    return false;
  }
  return true;
}

// function updateHTML() {
//   for (i of data) {
//     console.log(i);
//   }
// }

console.log(
  "If you know what are you doing, please Join us at Albonian Almarsus"
);
// updateHTML();
//

// dragging logic

// // addTaskBtn.onclick = function( {
// //   if()
// // })
// let draggable;
// let drag = null;
// function dragItem() {
//   let;
// }
tasks = document.querySelectorAll(".task");

tasks.forEach((t) => {
  t.addEventListener("dragstart", () => {
    t.classList.add("dragging");
    // console.log(drag, "dragstart");
  });
});

tasks.forEach((t) => {
  t.addEventListener("dragend", () => {
    draggable = document.querySelector(".dragging");
    t.classList.remove("dragging");
    // console.log(draggable, t);
  });
});

tasksList.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    column.appendChild(draggable);

    // column.children[1].appendChild(draggable);
    // console.log(e.target.parentElement, column);
  });
});
