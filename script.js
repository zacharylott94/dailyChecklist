//global context
let context = {};
context.tasks = [];
context.currentTime = 0;
context.lastTime = 0;
context.clockElement = document.getElementById("clock");
context.listElement = document.getElementById("list");
context.inputElement = document.getElementById("input");

//syncs context with the document. doesn't return
function updateList(){
  
  function buildTaskElement(task){
    let check = document.createElement("button");
    let del = document.createElement("button");
    let span = document.createElement("span");
    span.textContent = task.text;
    check.textContent = task.state;
    del.textContent = "delete";
    let element = document.createElement("div");
    element.appendChild(check);
    element.appendChild(span);
    element.appendChild(del);
      
    check.onclick = () =>{
      console.log("Was",task.state)
      task.state = !task.state
      updateList();
      console.log("Now", task.state)
    };

    return element;
}
  
  context.listElement.innerHTML = "";
  
  for(let each in context.tasks){
    context.listElement.appendChild(buildTaskElement(context.tasks[each]));
  }
  document.cookie = dump(context.tasks);
}

//keeps time. Doesn't return, calls update
function clock(){}

//compares current and last times, returns bool
function nextday(){}

//takes text from context.inputElement, shoves object into context.tasks. No return, updates List.
function createTask(input){
  input = input || context.inputElement
  console.log(input);
  //create an empty object
  let task = {};
  //throw in the text from our input box
  task.text = input.value;
  //set input box to empty
  input.value = "";
  //give our object a state
  task.state = false;
  context.tasks.push(task);
  updateList();
}

//takes a task object, and builds the DOM elements for it.
//returns object with .element for DOM
function buildTaskElement(task){
  let check = document.createElement("button");
  let del = document.createElement("button");
  let span = document.createElement("span");
  span.textContent = task.text;
  check.textContent = "false";
  del.textContent = "delete";
  let element = document.createElement("div");
  element.appendChild(check);
  element.appendChild(span);
  element.appendChild(del);
  return element;
}

//grabs cookie, returns object
function grab(cookie){
  return JSON.parse(cookie);
}

//dumps context object. returns string
function dump(object){
  return JSON.stringify(object);
}

//takes an element and appends it to the list
function appendList(element){
  context.listElement.appendChild(element);
}

function emptyAll(){
  document.cookie = null;
  context.tasks = [];
  updateList();
}

context.tasks = grab(document.cookie);
//console.log(context.tasks);
if (!context.tasks) {
  context.tasks = [];
}
updateList();
