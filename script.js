//global context object for holding our precious data
let context = {};

let taskList = []

//bogus test data
taskList.push({
  text: "a nisi praesentibus",
  state: false,
  element: "",
  checkbox: ""
          });
taskList.push({
  text: "voluptatibus si aut",
  state: false,
  element: "",
  checkbox: ""
          });
context.tasks = taskList;
//taskList should not be referred to past this point
//refer to context.tasks instead

//get a date object to keep track of time
context.currentDate = new Date;
//populate lastDate
context.lastDate = Date.now();
context.clock = document.getElementById("clock");


function createTask(task) {
  
  /*Define stuff
    1. list is our <main> with id="list"
    2. task is the line that spells out the task and has buttons
    3. check is our checkbox button
    4. span is where our text goes
    5. del is our delete button*/
  let list = document.getElementById("list");
  task.element = document.createElement("div");
  let check = document.createElement("button");
  check.state = false;
  check.textContent = "false";
  task.checkbox = check;
  let span = document.createElement("span");
  span.textContent = task.text;
  let del = document.createElement("button");
  del.textContent = "D";
  
  check.onclick = () => {
    
    
    console.log("state for \"" + task.text + "\" was " + task.state);
    
    //flip state
    task.state = !task.state;
    
    console.log("it is now " + task.state);
    
    //update button text
    update();
    
    //testing stuff here
    console.log(context.tasks);
  }
  
  del.onclick = () => {
    console.log("You pushed the delete button!");
    //grab the index of the task
    let index = context.tasks.indexOf(task);
    //remove it from our global
    if (index > -1) {
      context.tasks.splice(index, 1);
    }
    //testing stuff here
    console.log(context.tasks);
    //remove the dom element of task from the list
    list.removeChild(task.element);
    //trash task
    task = null;
  }
  
  /*Chain everything together*/
  task.element.appendChild(check);
  task.element.appendChild(span);
  task.element.appendChild(del);
  list.appendChild(task.element);
}

function nextDay(current, last) {
  if (current != last) {
    last = current;
    resetTasks(context.tasks);
  }
}

function resetTasks() {
  console.log("tasks resetting")
  for (let each in context.tasks) {
    context.tasks[each].state = false;
  }
  update();
  console.log(context.tasks);
  
}

function update(){
  for (let each in context.tasks){
    context.tasks[each].checkbox.textContent = context.tasks[each].state;
  }
}

function clock(){
  context.currentDate = new Date();
  context.clock.textContent = context.currentDate.toLocaleTimeString();
  try
  {
    if (context.currentDate.getDay()!= context.lastDate.getDay()) {
      context.lastDate = context.currentDate;
      resetTasks();
    }
  }
  catch(e){
  }
}

function dump(){
  document.cookie = JSON.stringify(context);
  console.log(document.cookie);
}

function grab(){
  context = JSON.parse(document.cookie);
  context.lastDate = new Date(context.lastDate);
  //populate HTML
  for (let each in context.tasks) {
    createTask(context.tasks[each]);
  }
  //I have to do this because the parse is trashing my element link in clock for some reason
  context.clock = document.getElementById("clock");
  
//  console.log(context.tasks[0].checkbox);
//  console.log(context.tasks[1].checkbox);
  
}

/*//populate HTML
for (let each in context.tasks) {
  createTask(context.tasks[each]);
}*/

//update current date every second
setInterval(clock,1000);
