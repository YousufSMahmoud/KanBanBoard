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
let number = 0;
let index = 0;
let allInput = document.querySelectorAll(".tasks-input");

function addTaskToHTML(parentId, value, id) {
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
  input.className = "tasks-input";
  input.id = id;

  input.value = value;
  iconsContainer.append(editButton);
  iconsContainer.append(trashButton);

  taskInput.append(input);
  taskInput.append(iconsContainer);
  if (parentId == 0) {
    zero.append(taskInput);
  }

  if (parentId == 1) {
    one.append(taskInput);
  }

  if (parentId == 2) {
    two.append(taskInput);
  }
}

let data = [];

if (window.localStorage.data) {
  data = JSON.parse(localStorage.data);
  for (i of data) {
    addTaskToHTML(i.parentId, i.title, i.id);
  }
}

if (window.localStorage.number) {
  number = JSON.parse(localStorage.number);
}

const trashBtn = document.getElementsByClassName(".btn-trash");
let tasksList = document.querySelectorAll(".tasks-list");
const container = document.querySelector(".container");
let dragContainer = document.querySelectorAll(".column");
let addTaskBtn = document.querySelectorAll(".button-add");

let columnId = document.querySelectorAll(".column");

function createTask(tasksList) {
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
  input.type = "text";
  input.className = "tasks-input";
  iconsContainer.append(editButton);
  iconsContainer.append(trashButton);
  taskInput.append(input);
  taskInput.append(iconsContainer);
  tasksList.append(taskInput);
}
columns.forEach((column) => {
  let tasksList = document.querySelectorAll(".tasks-list")[column.id];
  let addTaskBtn = document.querySelectorAll(".button-add")[column.id];

  addTaskBtn.addEventListener("click", (foo) => {
    createTask(tasksList);

    addTask(column.id);
    save();

    number++;
    window.localStorage.setItem("number", number);
    allInput = document.querySelectorAll(".tasks-input");
  });
});

[...tasksList].forEach((t) => {
  if (t.firstChild != null) {
    t.addEventListener("click", (e) => {
      if (e.target.classList.contains("trash")) {
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

function save() {
  window.localStorage.setItem("data", JSON.stringify(data));
}

function addTask(id) {
  tasks = document.getElementById(id).children;

  if (tasks.item(tasks.length - 2).firstChild.value != null) {
    let title = tasks.item(tasks.length - 2).firstChild.value;
    let parentId = tasks.item(tasks.length - 2).parentElement.id;

    const task = {
      id: `task-${number}`,
      title: title,
      parentId: parentId,
    };

    if (!data.map((a) => a.id).includes(task.id)) {
      data.push(task);
    }
  }
}

function countOccurrences(arr, elem) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      count++;
    }

    if (count > 1) {
      return true;
    }
  }

  if (count == 0) {
    return true;
  }
  return false;
}

function dragAddTask(id) {
  tasks = document.getElementById(id);
  for (i of tasks.children) {
    if (!data.map((a) => a.title).includes(i.firstChild.value)) {
      const task = {
        id: `task-${number}`,
        title: i.firstChild.value,
        parentId: i.parentElement.id,
      };

      if (task.title != undefined) {
        dragIndex(i);

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

console.log(
  "If you know what are you doing, please Join us at Albonian Almarsus"
);

// dragging logic

tasks = document.querySelectorAll(".task");

tasks.forEach((t) => {
  t.addEventListener("dragstart", () => {
    t.classList.add("dragging");
  });
});

tasks.forEach((t) => {
  t.addEventListener("dragend", () => {
    draggable = document.querySelector(".dragging");
    t.classList.remove("dragging");
    update();
    save();
  });
});

tasksList.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");

    if (draggable != null) {
      column.appendChild(draggable);

      addTask(draggable.parentElement.id);
    }
  });
});

function update() {
  let zero = document.getElementById(0);
  let one = document.getElementById(1);
  let two = document.getElementById(2);
  data = [];
  for (t of zero.children) {
    const task = {
      id: t.firstChild.id,
      title: t.firstChild.value,
      parentId: t.parentElement.id,
    };
    data.push(task);
  }

  for (t of one.children) {
    const task = {
      id: t.firstChild.id,
      title: t.firstChild.value,
      parentId: t.parentElement.id,
    };
    data.push(task);
  }

  for (t of two.children) {
    const task = {
      id: t.firstChild.id,
      title: t.firstChild.value,
      parentId: t.parentElement.id,
    };
    data.push(task);
  }
}
