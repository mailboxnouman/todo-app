
    function addTask() {
      var taskInput = document.getElementById('taskInput');
      var taskDateInput = document.getElementById('taskDate');
      var taskStartTimeInput = document.getElementById('taskStartTime');
      var taskEndTimeInput = document.getElementById('taskEndTime');
      var taskList = document.getElementById('taskList');

      if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement('li');
        taskItem.className = 'taskItem';
        
        var inputBox = document.createElement('input');
        inputBox.className = 'taskInput';
        inputBox.value = taskInput.value;
        


        taskItem.appendChild(inputBox);
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
        editBtn.innerHTML = ' ✎';
        editBtn.onclick = function() {
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
            saveBtn.innerHTML = ' ✔️';
            taskItem.appendChild(saveBtn);
        }

        saveBtn.onclick = function() {
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
        deleteBtn.innerHTML = ' &#x2715;';
        deleteBtn.onclick = function() {
          taskList.removeChild(taskItem);
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
 
