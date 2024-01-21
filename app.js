
const btn = document.getElementById('menu-btn')
const tmb = document.getElementById('top')
const mtb = document.getElementById('middle')
const btm = document.getElementById('bottom')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    btn.classList.toggle('bgWhite')
    tmb.classList.toggle('tmb')
    mtb.classList.toggle('tmb')
    btm.classList.toggle('tmb')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
    if (btn.className === "bgWhite") {
      btn.style.background = "black"
    }else{
      btn.style.background = "transparent"
    }
    if (menu.className === "hidden") {
      nav.style.animationName = "bottomToTop"
    }else{
      nav.style.animationName= "topToBottom";

    }
})
// btn.addEventListener("click", function() {
//  })


document.addEventListener("DOMContentLoaded", function() {
  function updateClock() {
    var today = new Date();

    var dayOfWeek = today.getDay();

    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var todayName = daysOfWeek[dayOfWeek];

    document.getElementById("day").innerText = todayName

    var hours = today.getHours();
    var minutes = today.getMinutes();

    var formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';

    var formattedMinutes = minutes.toString().padStart(2, '0');

    var formattedTime = formattedHours + ":" + formattedMinutes + " " + ampm;

    document.getElementById("time").innerText = formattedTime;
  }

  // Initial update
  updateClock();

  // Update every second
  setInterval(updateClock, 1000);
});


// document.addEventListener("DOMContentLoaded", function() {
//   var nav = document.getElementById("menu");
//   nav.style.animationName = "none";

// });






var add = document.getElementById("add");
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4");

add.addEventListener("click", function() {
    if (add.innerText === "Cancel") {
        // Logic for "Cancel" button state
        add.innerText = "Add new";
        container3.style.position = "absolute";
        container3.style.animationName = "lftToRgt";
        container3.style.zIndex = "-1";
        container4.style.animationName = "btmToTop";
    } else {
        // Logic for "Add new" button state
        add.innerText = "Cancel";
        add.style.color = "#4044C9";
        add.style.fontWeight = "600";
        add.style.fontSize = ".9rem";
        container3.style.position = "relative";
        container3.style.animationName = "rgtToLft";
        container3.style.zIndex = "1";
        container4.style.animationName = "tpToBtm";
    }
});




function checkListItems() {
  var taskList = document.getElementById("taskList");
  var noElFound = document.getElementById("noElFound")
  var listItems = taskList.getElementsByTagName("li");

  if (listItems.length === 0) {
    noElFound.style.display = "block"
  } else {
    noElFound.style.display = "none"
  }
}






document.addEventListener("DOMContentLoaded", function() {
  checkListItems();

  var addTaskBtn = document.getElementById("addTaskBtn");
  addTaskBtn.addEventListener("click", function() {
      checkListItems();
  });
});
    

document.addEventListener("DOMContentLoaded", function() {
  var taskInput = document.getElementById("taskInput");

  taskInput.addEventListener("input", function() {
      this.rows = 1;
      this.rows = Math.ceil(this.scrollHeight / 50); 
    });

  taskInput.addEventListener("input", function() {
      var lines = this.value.split("\n");
      var lineCount = lines.length;

      if (lineCount > this.rows) {
          this.rows = lineCount;
      }
  });
}); 
    
document.addEventListener("DOMContentLoaded", function () {
  loadTasksFromLocalStorage();
  checkListItems();

  var addTaskBtn = document.getElementById("addTaskBtn");
  addTaskBtn.addEventListener("click", function () {
    addTask();
    checkListItems();
  });
});

function loadTasksFromLocalStorage() {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var taskList = document.getElementById('taskList');

  tasks.forEach(function (task) {
    var taskItem = createTaskItem(task);
    taskItem.dataset.id = task.id;
    taskList.appendChild(taskItem);
  });
}

function saveTaskToLocalStorage(task) {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  // Add a unique ID to the task
  task.id = generateTaskId();
  
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInUI(taskItem, updatedTask) {
  // Assuming that the taskItem structure is similar to the createTaskItem function
  var inputBox = taskItem.querySelector('.taskInput');
  var dateInputBox = taskItem.querySelector('.taskDate');
  var startTimeInputBox = taskItem.querySelector('.taskStartTime');
  var endTimeInputBox = taskItem.querySelector('.taskEndTime');

  if (inputBox) {
    inputBox.value = updatedTask.content || "";
  }

  if (dateInputBox) {
    dateInputBox.value = updatedTask.date || "";
  }

  if (startTimeInputBox) {
    startTimeInputBox.value = updatedTask.startTime || "";
  }

  if (endTimeInputBox) {
    endTimeInputBox.value = updatedTask.endTime || "";
  }
}

function updateTaskInLocalStorage(taskItem, updatedTask) {
  var tasks = getTasksFromLocalStorage();
  var taskId = taskItem.dataset.id;

  // Find the index of the task with the specified ID
  var taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {

    // Update the existing task with the new data
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };


    // Save the updated tasks back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log("Task updated in local storage:", tasks); // Log the updated tasks

  }
}




function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}



function deleteTaskFromLocalStorage(taskItem) {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  var taskId = taskItem.dataset.id;

  // Find the task index in local storage based on the taskId
  var taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    // Remove the task from the local storage array
    tasks.splice(taskIndex, 1);

    // Save the updated tasks back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}


function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskDateInput = document.getElementById('taskDate');
  var taskStartTimeInput = document.getElementById('taskStartTime');
  var taskEndTimeInput = document.getElementById('taskEndTime');
  var taskList = document.getElementById('taskList');
  var addTaskBtn = document.getElementById('addTaskBtn')

  
if (taskInput.value.trim() !== "") {
    // Check if task date, start time, and end time are not empty
    if (taskDateInput.value === "" || taskStartTimeInput.value === "" || taskEndTimeInput.value === "") {
      taskDateInput.style.outline = "2px solid red";
      taskStartTimeInput.style.outline = "2px solid red";
      taskEndTimeInput.style.outline = "2px solid red";
      addTaskBtn.style.backgroundColor = "red";
      addTaskBtn.style.color = "white";
      addTaskBtn.innerText = "Please Specify Time & Date";

      // Revert styling and text changes after 2 seconds
      setTimeout(function () {
        taskDateInput.style.outline = "";
        taskStartTimeInput.style.outline = "";
        taskEndTimeInput.style.outline = "";
        addTaskBtn.style.backgroundColor = "white";
        addTaskBtn.style.color = "#4044C9";
        addTaskBtn.innerText = "Add Task";
      }, 2000);

      return; // Exit the function if there's an error
    }
  }
  // else if(taskInput.value.trim() == ""){
  //   taskInput.style.outline = "2px solid red";
  //   addTaskBtn.style.backgroundColor = "red";
  //   addTaskBtn.style.color = "white";
  //   addTaskBtn.innerText = "Please Write Something";
  
  //   // Revert styling and text changes after 2 seconds
  //   setTimeout(function () {
  //     taskInput.style.outline = "";
  //     addTaskBtn.style.backgroundColor = "white";
  //     addTaskBtn.style.color = "#4044C9";
  //     addTaskBtn.innerText = "Add Task";
  //   }, 2000);
// }


  if (taskInput.value.trim() !== "") {
    var taskItem = createTaskItem({
      content: taskInput.value.trim(),
      date: taskDateInput.value,
      startTime: taskStartTimeInput.value,
      endTime: taskEndTimeInput.value,
    });

    taskList.appendChild(taskItem);

    saveTaskToLocalStorage({
      id: taskItem.dataset.id,
      content: taskInput.value.trim(),
      date: taskDateInput.value,
      startTime: taskStartTimeInput.value,
      endTime: taskEndTimeInput.value,
    });

    taskInput.value = "";
    taskDateInput.value = "";
    taskStartTimeInput.value = "";
    taskEndTimeInput.value = "";
  }
}

function createTaskItem(task) {
  var taskItem = document.createElement('li');
  taskItem.className = 'taskItem';
  taskItem.dataset.id = task.id;
  taskItem.dataset.id = generateTaskId();
  taskItem.style.animationName = "rgtToLft";
  taskItem.style.animationDuration = ".5s";




  var inputBox = document.createElement('textarea');
  inputBox.className = 'taskInput';
  inputBox.value = task.content;
  var brTag = document.createElement('br');

  taskItem.appendChild(inputBox);
  taskItem.appendChild(brTag);
  inputBox.disabled = true;

  if (task.date !== "") {
    var dateInputBox = document.createElement('input');
    dateInputBox.className = 'taskDate';
    dateInputBox.type = 'date';
    dateInputBox.disabled = true;
    taskItem.appendChild(dateInputBox);
    dateInputBox.value = task.date;
  }

  if (task.startTime !== "") {
    var startTimeInputBox = document.createElement('input');
    startTimeInputBox.className = 'taskStartTime';
    startTimeInputBox.type = 'time';
    startTimeInputBox.disabled = true;
    taskItem.appendChild(startTimeInputBox);
    startTimeInputBox.value = task.startTime;
  }

  if (task.endTime !== "") {
    var endTimeInputBox = document.createElement('input');
    endTimeInputBox.className = 'taskEndTime';
    endTimeInputBox.type = 'time';
    endTimeInputBox.disabled = true;
    taskItem.appendChild(endTimeInputBox);
    endTimeInputBox.value = task.endTime;
  }

  var editBtn = document.createElement('span');
  editBtn.className = 'editBtn';
  editBtn.innerHTML = '<img src="./src/pen-solid.svg" width="13px" >';
  editBtn.onclick = function () {
    enableEditing(inputBox, dateInputBox, startTimeInputBox, endTimeInputBox, taskItem, task);
  };

  var deleteBtn = document.createElement('span');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.innerHTML = '<img src="./src/circle-xmark-solid.svg" width="13px" >';
  deleteBtn.onclick = function () {
    deleteTaskFromLocalStorage(taskItem);
    taskItem.style.animationName = "rgtToLft-2";
    taskItem.style.animationDuration = ".5s";
    setTimeout(function () {
      taskList.removeChild(taskItem);
      checkListItems();
    }, 500);
  };

  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);

  return taskItem;
}
function generateTaskId() {
  // Generate a unique ID, you can use a library or a more complex logic if needed
  return Date.now().toString();
}

function enableEditing(inputBox, dateInputBox, startTimeInputBox, endTimeInputBox, taskItem, task) {
  inputBox.style.border = "1px solid #4044C9";
  if (dateInputBox) {
    dateInputBox.style.border = "1px solid #4044C9";
  }
  if (startTimeInputBox) {
    startTimeInputBox.style.border = "1px solid #4044C9";
  }
  if (endTimeInputBox) {
    endTimeInputBox.style.border = "1px solid #4044C9";
  }

  inputBox.disabled = false;
  if (dateInputBox) {
    dateInputBox.disabled = false;
  }
  if (startTimeInputBox) {
    startTimeInputBox.disabled = false;
  }
  if (endTimeInputBox) {
    endTimeInputBox.disabled = false;
  }

  var saveBtn = taskItem.querySelector('.saveBtn');

  if (!saveBtn) {
    saveBtn = document.createElement('span');
    saveBtn.className = 'saveBtn';
    saveBtn.innerHTML = '<img src="./src/circle-check-solid.svg" width="13px" >';
    taskItem.appendChild(saveBtn);
  }

  // Show the save button when editing starts
  saveBtn.style.display = "inline-block";
  saveBtn.onclick = function () {
    inputBox.style.border = "none";
    dateInputBox.style.border = "none";
    startTimeInputBox.style.border = "none";
    endTimeInputBox.style.border = "none";

    inputBox.disabled = true;
    if (dateInputBox) {
      dateInputBox.disabled = true;
    }
    if (startTimeInputBox) {
      startTimeInputBox.disabled = true;
    }
    if (endTimeInputBox) {
      endTimeInputBox.disabled = true;
    }

    // Get the updated task data
    var updatedTask = {
      content: inputBox.value,
      date: dateInputBox ? dateInputBox.value : "",
      startTime: startTimeInputBox ? startTimeInputBox.value : "",
      endTime: endTimeInputBox ? endTimeInputBox.value : ""
    };

    // Update the task in the UI
    updateTaskInUI(taskItem, updatedTask);

    // Update the task in local storage
    updateTaskInLocalStorage(taskItem, updatedTask);

    taskItem.removeChild(saveBtn);

    // Hide the save button after saving
    saveBtn.style.display = "none";
  };

}



function checkListItems() {
  var taskList = document.getElementById("taskList");
  var noElFound = document.getElementById("noElFound")
  var listItems = taskList.getElementsByTagName("li");

  if (listItems.length === 0) {
    noElFound.style.display = "block"
  } else {
    noElFound.style.display = "none"
  }
}

