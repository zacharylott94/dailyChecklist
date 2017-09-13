let data = []

//bogus test data
data.push({
  text: "a nisi praesentibus",
  state: false,
  element: ""
          });
data.push({
  text: "voluptatibus si aut",
  state: false,
  element: ""
          });


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
  check.textContent = "0";
  let span = document.createElement("span");
  span.textContent = task.text;
  let del = document.createElement("button");
  del.textContent = "D";
  
  check.onclick = () => {
    console.log("state for \"" + task.text + "\" was " + task.state);
    task.state = !task.state;
    console.log("it is now " + task.state);
  }
  
  del.onclick = () => {
    console.log("You pushed the delete button!");
    //grab the index of the task
    let index = data.indexOf(task);
    //remove it from our global
    if (index > -1) {
      data.splice(index, 1);
    }
    //testing stuff here
    console.log(data);
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

//populate HTML
for (let each in data) {
  createTask(data[each]);
}