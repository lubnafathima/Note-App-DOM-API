// Filter
let filterMenu = document.querySelector(".menu");
let filterDropdown = document.querySelector(".dropdown");

function menu() {
  if (filterDropdown.style.display === "none") {
    filterDropdown.style.display = "block";

    filterMenu.classList.remove("fa-angle-right");
    filterMenu.classList.add("fa-chevron-down");
  } else {
    filterDropdown.style.display = "none";

    filterMenu.classList.remove("fa-chevron-down");
    filterMenu.classList.add("fa-angle-right");
  }
}

// Do Section
let doSection = document.querySelector(".do-section-main");
let doingSection = document.querySelector(".doing-section-main");
let doneSection = document.querySelector(".done-section-main");

let doArray = [
  'Create a project, call it "Bucket List" and enter things I want to do once things get better',
  "Figure out what Rapunzel did while she was quarantined in a castle",
  "Give away old clothes to charity",
  "Read a book",
  "Try meditating once",
  "Video call 3 friends I've not spoken to in a long time",
];

let doingArray = [
  "Create a shared project with someone dear to me consisting of tasks the both of us want to complete this year",
  "Get a quareantine hair cut",
];

let doneArray = ["Try out yoga once"];

function createTask(task, section) {
  let container = document.createElement("div");

  let img = document.createElement("img");
  let isDone = false;
  if (section === doSection) {
    img.src = "do.svg";
  } else if (section === doingSection) {
    img.src = "doing.svg";
  } else {
    img.src = "done.svg";
    isDone = true;
  }

  img.addEventListener("click", () => {
    if (isDone) {
      if (section === doingSection) {
        img.src = "doing.svg";
      } else {
        img.src = "do.svg";
      }
    } else {
      img.src = "done.svg";
    }
    isDone = !isDone;
  });
  img.width = 20;
  img.style.cursor = "pointer";
  container.appendChild(img);

  let text = document.createElement("p");
  text.innerHTML = task;
  container.appendChild(text);

  let star = document.createElement("i");
  star.classList.add("fa-regular", "fa-star", "star-yellow");
  star.addEventListener("click", () => {
    toggleStar(star);
  });
  star.style.cursor = "pointer";
  container.appendChild(star);

  container.classList = "container";
  text.classList = "text";

  return container;
}

function addTask(tasks, section) {
  tasks.forEach((task) => {
    let taskElement = createTask(task, section);
    section.appendChild(taskElement);
  });
}

addTask(doArray, doSection);
addTask(doingArray, doingSection);
addTask(doneArray, doneSection);

function toggleStar(star) {
  if (star.classList.contains("fa-solid")) {
    star.classList.remove("fa-solid");
    star.classList.add("fa-regular");
  } else {
    star.classList.remove("fa-regular");
    star.classList.add("fa-solid");
  }
}

































// let img = document.createElement("img");
//   img.style.cursor = "pointer";
//   if (section === doSection) {
//     img.src = "do.svg";
//     let isDone = false;
//     img.addEventListener("click", () => {
//       if (isDone) {
//         img.src = "do.svg";
//       } else {
//         img.src = "done.svg";
//       }
//       isDone = !isDone;
//     });
//   } else if (section === doingSection) {
//     img.src = "doing.svg";
//     let isDone = false;
//     img.addEventListener("click", () => {
//       if (isDone) {
//         img.src = "doing.svg";
//       } else {
//         img.src = "done.svg";
//       }
//       isDone = !isDone;
//     });
//   } else {
//     img.src = "done.svg";
//     let isDone = false;
//     img.addEventListener("click", () => {
//       if (isDone) {
//         img.src = "done.svg";
//       } else {
//         img.src = "do.svg";
//       }
//       isDone = !isDone;
//     });
//   }