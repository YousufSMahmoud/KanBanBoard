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

function addTaskToHTML(id, value) {
  // columns.forEach((column) => {
  //   const addTaskBtn = document.getElementsByTagName("button")[column.id];
  //   addTaskBtn.addEventListener("click", (foo) => {});
  // });
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
  input.className = "task-input";
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
  //for (column of JSON.parse(window.localStorage.data).map((a) => a.parentId)) {
  //  const addTaskBtn = document.querySelectorAll(".button-add")[column];
  // let tasksList = document.querySelectorAll(".tasks-list")[column];

  // addTaskBtn.addEventListener("click", (foo) => {
  //   const taskInput = document.createElement("div");
  //   const input = document.createElement("input");
  //   const iconsContainer = document.createElement("div");
  //   iconsContainer.className = "icons-container";
  //   const editButton = document.createElement("button");
  //   editButton.className = "btn-edit";
  //   const trashButton = document.createElement("button");
  //   trashButton.className = "btn-trash";

  //   editButton.innerHTML += `<ion-icon name="create-outline" class="edit"></ion-icon>`;
  //   trashButton.innerHTML += `<ion-icon name="trash-outline" class="trash"></ion-icon>
  //   `;

  //   taskInput.className = "task";
  //   input.type = "text";
  //   input.className = "task-input";
  //   taskInput.style.cursor = "auto";
  //   iconsContainer.append(editButton);
  //   iconsContainer.append(trashButton);
  //   taskInput.append(input);
  //   taskInput.append(iconsContainer);
  //   tasksList.append(taskInput);
  //   // console.log(tasksList, "hi");
  //   // data.push(taskInput.outerHTML);
  //   window.localStorage.setItem("data", JSON.stringify(data));
  //   addTask(column.id);
  //   save();
  //   updateData();

  //   number++;

  //   // if (input.value != "") {
  //   //   console.log(input.value);
  //   // }
  // });
  //}
}

number = 1;

const trashBtn = document.querySelectorAll(".btn-trash");
let tasksList = document.querySelectorAll(".tasks-list");
const container = document.querySelector(".container");
let dragContainer = document.querySelectorAll(".column");

trashBtn.forEach((trash) => {});
// const data = [];
let columnId = document.querySelectorAll(".column");

columns.forEach((column) => {
  let tasksList = document.querySelectorAll(".tasks-list")[column.id];
  const addTaskBtn = document.querySelectorAll(".button-add")[column.id];

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
    updateData();

    number++;

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

function updateHTML() {
  for (i of data) {
    console.log(i);
  }
}

console.log(
  "If you know what are you doing, please Join us at Albonian Almarsus"
);
// updateHTML();
//

// dragging logic

// const allInput = document.getElementsByClassName(".task");
// tasksList.forEach((t) => {
//   t.addEventListener("dragstart", () => {
//     t.classList.add("dragging");
//     console.log("start");
//   });
// });

// let draggable;
// tasksList.forEach((t) => {
//   t.addEventListener("dragend", () => {
//     draggable = document.querySelector(".dragging");

//     t.classList.remove("dragging");
//   });
// });
// dragContainer.forEach((column) => {
//   column.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     // const draggable = document.querySelector(".dragging");
//     console.log(column.children[1]);
//     // column.children[1].appendChild(draggable);
//   });
// });
