function task(text) {
  
  /*Define stuff
    1. list is our <main> with id="list"
    2. task is the line that spells out the task and has buttons
    3. check is our checkbox button
    4. span is where our text goes
    5. del is our delete button*/
  let list = document.getElementById("list");
  let task = document.createElement("div");
  let check = document.createElement("button");
  check.state = false;
  check.textContent = "0";
  let span = document.createElement("span");
  span.textContent = text;
  let del = document.createElement("button");
  del.textContent = "D";
  
  check.onclick = (self) => {
    self.state = !self.state;
    if self.state {self.textContent = "1"}
    else {self.textContent = "0"};
  }
  
  /*Chain everything together*/
  task.appendChild(check);
  task.appendChild(span);
  task.appendChild(del);
  list.appendChild(task);
}

task("voluptatibus nam proident");
task("e arbitrantur nostrud");
task("si et senserit");