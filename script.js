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
  set("tasks", JSON.stringify(context.tasks));
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


//sets a value in localStorage
//accepts strings, doesn't return
function set(key, value){
  console.log("set "+ key, value);
  window.localStorage.setItem(key,value);
}

//gets a value in localStorage
//accepts string, returns string
function get(key){
  console.log("get "+ key);
  return window.localStorage.getItem(key);
}

//empties a value in localStorage
function clear(key){
  window.localStorage.removeItem(key);
}



//takes an element and appends it to the list
function appendList(element){
  context.listElement.appendChild(element);
}

function emptyAll(){
  clear("tasks");
  context.tasks = [];
  updateList();
}

context.tasks = JSON.parse(get("tasks"));
//console.log(context.tasks);
if (!context.tasks) {
  context.tasks = [];
}
updateList();
