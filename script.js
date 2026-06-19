let addBtn = document.querySelector(".addBtn");
let addTask = document.querySelector(".addTask");
let add = document.querySelector(".save");
// let save = document.querySelector(".save");
let cancel = document.querySelector(".cancel");
let title = document.querySelector("#title");
let textarea = document.querySelector("textarea");
let Status = document.querySelector("#status");
let date = document.querySelector("#date");
let row = document.querySelector("#taskContainer");
let form = document.querySelector("form");
let cb = document.querySelector(".checkbox");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

let clearAll = document.querySelector(".clear-all");
let search = document.querySelector(".search");
let sidemenu = document.querySelectorAll(".menu");


addBtn.addEventListener("click", () => {
  addTask.style.display = "flex";
});

clearAll.addEventListener("click", () => {
  row.innerHTML ="";
  taskArr = [];
  localStorage.setItem("tasks", JSON.stringify(taskArr));
});

cancel.addEventListener("click", (e) => {
  form.reset();
  addTask.style.display = "none";
  e.preventDefault();
});

search.addEventListener("input" ,(e) =>{
   row.innerHTML = "";
   let searchValue = e.target.value.toLowerCase();
   taskArr.forEach((elem,index) =>{
    if(elem.taskName.toLowerCase().includes(searchValue)){
       row.innerHTML += `<div class="row">
        <div class="task-name">
        
        <input type="checkbox" class="checkbox ${elem.state}-icon" id="${elem.state}" ${elem.state === "completed" ? "checked data-checked ='true'" : "data-checked ='false'"}>
                                                                                                          
                <div>
                <b>${elem.taskName}</b>
                <small>${elem.desc}</small>
                </div>
              </div>

              <span class="status ${elem.state}">${elem.state}</span>

              <p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  id="Blank-Calendar--Streamline-Core"
                  height="14"
                  width="14"
                >
                    <g id="blank-calendar--blank-calendar-date-day-month-empty">
                    <path
                    id="Vector"
                    class="stock dark-icon"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1.5 2c-0.26522 0 -0.51957 0.10536 -0.707107 0.29289C0.605357 2.48043 0.5 2.73478 0.5 3v9.5c0 0.2652 0.105357 0.5196 0.292893 0.7071 0.187537 0.1875 0.441887 0.2929 0.707107 0.2929h11c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V3c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C13.0196 2.10536 12.7652 2 12.5 2h-2"
                    stroke-width="1"
                    ></path>
                    <path
                    id="Vector_2"
                    class="stock dark-icon"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M0.5 5.5h13"
                    stroke-width="1"
                    ></path>
                    <path
                      id="Vector_3"
                      class="stock dark-icon"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.5 0.5v3"
                      stroke-width="1"
                      ></path>
                      <path
                      id="Vector_4"
                      class="stock dark-icon"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 0.5v3"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector_5"
                      class="stock dark-icon"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.5 2h5"
                      stroke-width="1"
                      ></path>
                      </g>
                      </svg>
                       ${elem.time}
                      </p>
                      
                      <div class="edit-del">
                <i onclick="updateTask('${elem.taskName}')" class="ri-edit-line edit-btn"></i>
                <i onclick="deleteTask(${index})" class="ri-delete-bin-line"></i>
              </div>
              </div>`;
    }
   })
});

let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];

let ui = () => {
  let taskName = title.value;
  let desc = textarea.value;
  let state = Status.value;
  let time = date.value;

  if (taskName.trim() === "" || state.trim() === "" || time.trim() === "") {
    alert("Please fill in all the fields");
    return false;
  }

  let obj = {
    taskName,
    desc,
    state,
    time,
  };

  if (updateValue !== null) {
    add.textContent = "Add Task";
    taskArr[updateValue] = obj;
    updateValue = null;
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  } else {
    taskArr.push(obj);
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  }
  return true;
};

let countOne;
let countTwo;
let countThree;
let countFour;
function counter1(){
  countTwo = 0;
  countThree = 0;
  countFour = 0;
  taskArr.forEach((e) =>{
    if(e.state === "completed"){
      countFour++;
    }
  });
   taskArr.forEach((e) =>{
     if(e.state === "todo"){
       countTwo++;
    }
  });
  taskArr.forEach((e) =>{
    if(e.state === "progress"){
      countThree++;
    }
  });
  countOne = countTwo + countThree + countFour;
}


let updateValue = null;

// Using custom attribute (data-checked) to store the checkbox state.
// data-checked="true" when task is completed and data-checked="false" otherwise.
// It helps to identify the checkbox state directly from the DOM using getAttribute().
let userInterface = (filterState = "all") => {
  row.innerHTML = "";
  taskArr.forEach((elem, index) => {
    if(filterState === "all" || elem.state === filterState){
    row.innerHTML += `<div class="row">
      <div class="task-name">
      
      <input type="checkbox" class="checkbox ${elem.state}-icon" id="${elem.state}" ${elem.state === "completed" ? "checked data-checked ='true'" : "data-checked ='false'"}>
                                                                                                   
              <div>
              <b>${elem.taskName}</b>
              <small>${elem.desc}</small>
              </div>
            </div>

            <span class="status ${elem.state}">${elem.state}</span>

            <p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                id="Blank-Calendar--Streamline-Core"
                height="14"
                width="14"
                
              >
                <desc>
                  Blank Calendar Streamline Icon: https://streamlinehq.com
                  </desc>
                  <g id="blank-calendar--blank-calendar-date-day-month-empty">
                  <path
                  id="Vector"
                  class="stock dark-icon"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M1.5 2c-0.26522 0 -0.51957 0.10536 -0.707107 0.29289C0.605357 2.48043 0.5 2.73478 0.5 3v9.5c0 0.2652 0.105357 0.5196 0.292893 0.7071 0.187537 0.1875 0.441887 0.2929 0.707107 0.2929h11c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V3c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C13.0196 2.10536 12.7652 2 12.5 2h-2"
                  stroke-width="1"
                  ></path>
                  <path
                  id="Vector_2"
                  class="stock dark-icon"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M0.5 5.5h13"
                  stroke-width="1"
                  ></path>
                  <path
                    id="Vector_3"
                    class="stock dark-icon"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.5 0.5v3"
                    stroke-width="1"
                    ></path>
                    <path
                    id="Vector_4"
                    class="stock dark-icon"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 0.5v3"
                    stroke-width="1"
                  ></path>
                  <path
                    id="Vector_5"
                    class="stock dark-icon"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.5 2h5"
                    stroke-width="1"
                    ></path>
                    </g>
                    </svg>
                     ${elem.time}
                    </p>
                    
                    <div class="edit-del">
              <i onclick="updateTask('${elem.taskName}')" class="ri-edit-line edit-btn"></i>
              <i onclick="deleteTask(${index})" class="ri-delete-bin-line"></i>
            </div>
            </div>`;
    }
  });
  counter1();
  one.textContent = countOne;
  two.textContent = countTwo;
  three.textContent = countThree;
  four.textContent = countFour;
  console.log(one.textContent);
};

userInterface();

add.addEventListener("click", (e) => {
  e.preventDefault();
  let isValid = ui();
  if (isValid) {
    form.reset();
    addTask.style.display = "none";
  }
  console.log(taskArr);
  userInterface();
});

let currState = "todo";
row.addEventListener("change", (e) => {
  if (e.target.classList.contains("checkbox")) {
    let checkbox = e.target;

    // find clicked task index
    // [...document.querySelectorAll(".checkbox")] Converts NodeList into a real array. so we can use array methods on it like indexOf
    // NodeList does not method lie indexOf so without this it will give TypeError: NodeList.indexOf is not a function
    let taskIndex = [...document.querySelectorAll(".checkbox")].indexOf(
      checkbox,
    );

    // change state
    // console.log(checkbox.checked);
    if (checkbox.checked) {
      currState = taskArr[taskIndex].state;
      taskArr[taskIndex].state = "completed";
      localStorage.setItem("tasks", JSON.stringify(taskArr));
    } else {
      taskArr[taskIndex].state = currState;
      localStorage.setItem("tasks", JSON.stringify(taskArr));
    }

    userInterface();
    // get the value of custom attribute
    // e.target still refers to the old checkbox that trigger the event because
    // userInterface() removes the old DOM(checkbox) and creates a new checkbox.
    // So we select the new checkbox from DOM and check its data-checked value(new checkbox state) instead of using e.target(old checkbox state)
    let newCheckbox = document.querySelectorAll(".checkbox")[taskIndex];
    // console.log(newCheckbox.getAttribute("data-checked"));
  }
});

function updateTask(name) {
  console.log("clicked");
  addTask.style.display = "flex";

  let taskname = taskArr.find((e) => {
    return e.taskName === name;
  });
  updateValue = taskArr.findIndex((e) => {
    return e.taskName === name;
  });
  console.log(taskname);
  title.value = taskname.taskName;
  textarea.value = taskname.desc;
  Status.value = taskname.state;
  date.value = taskname.time;
  add.textContent = "Update";

  // title.value give the current value of the input(title field)
  // title.getAttribute("value") give the null value because the value attribute is not present in the input
  // title.value gives the current value entered/changed by the user in the input field.
  // title.getAttribute("value") gives the original value of the "value" attribute written in HTML.
  // value property updates with user input, but getAttribute() does not change automatically.
  console.log(title.value);
  console.log(title.getAttribute("value"));
}

function deleteTask(index) {
  taskArr.splice(index, 1);
  userInterface();
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}

let app = document.querySelector(".app");
let theme = document.querySelector(".light");

let dataThemeSidebar = document.querySelector("[data-themeSidebar]");
let dataThemeSidebarImg = document.querySelector("[data-themeSidebarImg]");
let dataThemeMenu = document.querySelectorAll("[data-themeMenu]");
let dataHr = document.querySelector("[data-hr]");
let dataMain = document.querySelector("[data-main]");
let dataSearch = document.querySelector("[data-search]");
let dataTask = document.querySelector("[data-task]");
let dataHeading = document.querySelector("[data-heading]");
let Stock = document.querySelectorAll(".stock");
let dataPipeline = document.querySelector("[data-pipeline]");

theme.addEventListener("click", () => {
  if (theme.classList.contains("dark")) {
    // dark mode enable
    theme.textContent = "☀️ Light Mode";
    theme.classList.replace("dark", "light");

    dataThemeSidebar.setAttribute("data-themeSidebar", "");
    dataThemeSidebarImg.setAttribute("data-themeSidebarImg", "");
    dataThemeMenu.forEach((menu) => {
      menu.setAttribute("data-themeMenu", "");
    });
    dataHr.setAttribute("data-hr", "");
    dataMain.setAttribute("data-main", "");
    dataSearch.setAttribute("data-search", "");
    dataTask.setAttribute("data-task", "");
    dataHeading.setAttribute("data-heading", "");
    Stock.forEach((path) => {
      path.classList.add("dark-icon");
    });
    if (dataPipeline) dataPipeline.setAttribute("data-pipeline", "");   
  } 
  else {
    // light mode enable
    theme.textContent = "🌙 Dark Mode";
    theme.classList.replace("light", "dark");

    dataThemeSidebar.removeAttribute("data-themeSidebar");
    dataThemeSidebarImg.removeAttribute("data-themeSidebarImg");
    dataThemeMenu.forEach((menu) => {
      menu.removeAttribute("data-themeMenu");
    });
    dataHr.removeAttribute("data-hr");
    dataMain.removeAttribute("data-main");
    dataSearch.removeAttribute("data-search");
    dataTask.removeAttribute("data-task");
    dataHeading.removeAttribute("data-heading");
    Stock.forEach((path) => {
      path.classList.remove("dark-icon");
    });
    if (dataPipeline) dataPipeline.removeAttribute("data-pipeline"); 
  }
});



// Event Delegation:
// Instead of adding click listeners to every checkbox separately,
// we add one listener to the parent element (row).
// When a child element is clicked, the event bubbles up to the parent.
// e.target tells the actual clicked element (child).
// e.currentTarget tells the element where the listener is attached (parent).
// This works for dynamically created checkboxes also because the parent already exists.

// ----------Structure(flow)-------------

// CAPTURING
// #taskContainer
//        ↓
//      row
//        ↓
//  checkbox  (clicked)


// TARGET
// checkbox


// BUBBLING
// checkbox
//        ↓
//      row
//        ↓
// #taskContainer


let taskContainer = document.querySelector("#taskContainer");


// Capturing phase
// Event travels from parent to child (top to bottom)
// true means capture phase
taskContainer.addEventListener("click", (e) => {

    console.log("Capturing phase");
    console.log("Current Target (listener):", e.currentTarget);
    console.log("Target (clicked element):", e.target);

}, true);


// Target + Event Delegation
// We check which child element was actually clicked
taskContainer.addEventListener("click", (e) => {

    if (e.target.classList.contains("checkbox")) {

        console.log("Checkbox clicked");
        console.log("----------------------------");

    }

});


// Bubbling phase
// Event travels from child back to parent
taskContainer.addEventListener("click", (e) => {
  console.log("Bubbling phase");
    if (e.target.classList.contains("checkbox")) {

        console.log("Checkbox clicked");

    }
    console.log("Target (clicked element):", e.target);
    console.log("Current Target (listener):", e.currentTarget);

});


let pipelineS = document.querySelector(".pipeline-section");
let browser = document.querySelector(".browser");

browser.addEventListener("click", (e)=>{
    if(e.target.classList.toggle("show")){
      pipelineS.style.display = "flex";
    }
    else{
      pipelineS.style.display = "none";
    }
});

sidemenu.forEach((menu, index) => {
  menu.addEventListener("click", () =>{
    sidemenu.forEach(m => m.classList.remove("active"));
    menu.classList.add("active");
   console.log(menu.target);
    if(index === 0){
      userInterface("all");
    }
    else if(index === 1){
      userInterface("todo");
    }
    else if(index === 2){
      userInterface("progress");
    }
    else if(index === 3){
      userInterface("completed");
    }
  })
});








