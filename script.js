//global context
let context = {};
context.tasks = [];
context.currentTime = 0;
context.lastTime = 0;
context.clockElement = document.getElementById("clock");
context.listElement = document.getElementById("list");
context.inputElement = document.getElementById("input");

//syncs context with the document. doesn't return
function updateDoc(){
  
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
  
  context.listElement.innerHTML = "";
  
  for(let each in context.tasks){
    context.listElement.appendChild(buildTaskElement(context.tasks[each]));
  }
}

//keeps time. Doesn't return, calls update
function clock(){}

//compares current and last times, returns bool
function nextday(){}

//takes text. If no text, takes text from context.inputElement returns an object
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
  return task;
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
function grab(cookie){}

//dumps context object. returns string
function dump(){}

//takes an element and appends it to the list
function appendList(element){
  context.listElement.appendChild(element);
}

let test = createTask({value:"test"});
context.tasks.push(test);
let test2 = createTask({value:"test2"});
context.tasks.push(test2);

updateDoc();
//updates stuff
setInterval(() =>{
  clock();
  updateDoc();
}, 100);