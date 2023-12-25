
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
          // console.error("Error: Task date, start time, and end time must be provided.");
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
        }}


      if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement('li');
        taskItem.className = 'taskItem';
        taskItem.style.animationName = "rgtToLft"
        taskItem.style.animationDuration = ".5s"
        
        var inputBox = document.createElement('textarea');
        inputBox.className = 'taskInput';
        inputBox.value = taskInput.value;
        var brTag = document.createElement('br');
        


        taskItem.appendChild(inputBox);
        taskItem.appendChild(brTag);
        inputBox.disabled = true;
        
        if (taskDateInput.value !== ""){
        var selectedDate = taskDateInput.value;
        var dateInputBox = document.createElement('input');
        dateInputBox.className = 'taskDate';
        dateInputBox.type = 'date';
        dateInputBox.disabled = true;
        taskItem.appendChild(dateInputBox);
        dateInputBox.value = selectedDate;
      }
        
        if (taskStartTimeInput.value !== ""){
        var selectedStartTime = taskStartTimeInput.value;
        var startTimeInputBox = document.createElement('input');
        startTimeInputBox.className = 'taskStartTime';
        startTimeInputBox.type = 'time';
        startTimeInputBox.disabled = true;
        taskItem.appendChild(startTimeInputBox);
        startTimeInputBox.value = selectedStartTime;
      }
        if (taskEndTimeInput.value !== ""){
        var selectedEndTime = taskEndTimeInput.value;
        var endTimeInputBox = document.createElement('input');
        endTimeInputBox.className = 'taskEndTime';
        endTimeInputBox.type = 'time';
        endTimeInputBox.disabled = true;
        taskItem.appendChild(endTimeInputBox);
        endTimeInputBox.value = selectedEndTime;
      }


     
        var editBtn = document.createElement('span');
        editBtn.className = 'editBtn';
        editBtn.innerHTML = ' <i class="fa-solid fa-pen"></i>';
        editBtn.onclick = function() {


          // taskItem.style.backgroundColor = "#4044C9"
          // taskItem.style.border = "2px solid #4044C9"
          inputBox.style.border = "1px solid #4044C9"
          dateInputBox.style.border = "1px solid #4044C9"
          startTimeInputBox.style.border = "1px solid #4044C9"
          endTimeInputBox.style.border = "1px solid #4044C9"
          // taskItem.style.color = "white"
          // inputBox.style.backgroundColor = "#4044C9"
          // inputBox.style.color = "white"
          // dateInputBox.style.border = "1px solid #4044C9"
          // dateInputBox.style.color = "white"
          // startTimeInputBox.style.border = "1px solid #4044C9"
          // startTimeInputBox.style.color = "white"
          // endTimeInputBox.style.border = "1px solid #4044C9"
          // endTimeInputBox.style.color = "white"


          inputBox.disabled = false;
          if (dateInputBox){
          dateInputBox.disabled = false;
        }
          if (startTimeInputBox){
            startTimeInputBox.disabled = false;
        }
          if (endTimeInputBox){
            endTimeInputBox.disabled = false;
        }
          

          var saveBtn = taskItem.querySelector('.saveBtn');


          if (!saveBtn) {
            saveBtn = document.createElement('span');
            saveBtn.className = 'saveBtn';
            saveBtn.innerHTML = ' <i class="fa-solid fa-circle-check"></i>';
            taskItem.appendChild(saveBtn);
        }

        saveBtn.onclick = function() {


          inputBox.style.border = "none"
          dateInputBox.style.border = "none"
          startTimeInputBox.style.border = "none"
          endTimeInputBox.style.border = "none"
          // taskItem.style.border = "none"
          // inputBox.style.border = "none"
          // taskItem.style.backgroundColor = "white"
          // taskItem.style.border = "none"
          // taskItem.style.color = "black"
          // inputBox.style.backgroundColor = "white"
          // inputBox.style.border = "none"
          // inputBox.style.color = "black"
          // dateInputBox.style.backgroundColor = "white"
          // dateInputBox.style.border = "none"
          // dateInputBox.style.color = "black"
          // startTimeInputBox.style.backgroundColor = "white"
          // startTimeInputBox.style.border = "none"
          // startTimeInputBox.style.color = "black"
          // endTimeInputBox.style.backgroundColor = "white"
          // endTimeInputBox.style.border = "none"
          // endTimeInputBox.style.color = "black"


          inputBox.disabled = true;
          if (dateInputBox){
            dateInputBox.disabled = true;
          }
            if (startTimeInputBox){
              startTimeInputBox.disabled = true;
          }
            if (endTimeInputBox){
              endTimeInputBox.disabled = true;
          }

          taskItem.removeChild(saveBtn);
        }
          // // var updatedTask = prompt('Edit the task:', taskInput.value);
          // // if (updatedTask !== null) {
          // //   var updatedTaskDate = taskDate ? taskDate.toLocaleDateString() : '';
          // //   inputBox.value = updatedTask;
          //   taskText.nodeValue = `[${updatedTaskDate}] ${timePeriod}`;
          // }
        };

        var deleteBtn = document.createElement('span');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = ' <i class="fa-solid fa-circle-xmark"></i>';
        deleteBtn.onclick = function() {
          taskItem.style.animationName = "rgtToLft-2"
          taskItem.style.animationDuration = ".5s"
          setTimeout(function () {
            taskList.removeChild(taskItem);
          checkListItems();
          }, 500);
          
        };

        taskItem.appendChild(editBtn);

        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        taskInput.value = "";
        taskDateInput.value = "";
        taskStartTimeInput.value = "";
        taskEndTimeInput.value = "";
      }
    }
 
