const manager = {

    addTask: function(input) {
        let errorMessage = document.getElementById('errorMessage');

        if (input.value.trim() == "") {
            errorMessage.innerHTML = 'Ej tillåtet att skapa tomma sysslor!';
        } else {
            errorMessage.innerHTML = '';
            let listItem = document.createElement('li');
            let taskInput = document.createElement('input');
            taskInput.value = input.value;
            taskInput.setAttribute('disabled', 'true');

            let changeBtn = document.createElement('button');
            changeBtn.innerText = 'Ändra';

            let doneBtn = document.createElement('button');
            doneBtn.innerText = 'Färdig';

            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Radera';


            changeBtn.addEventListener('click', function() {
                manager.changeTask(taskInput, changeBtn, listItem);
            });

            doneBtn.addEventListener('click', function() {
                manager.doneTask(listItem, doneBtn);
            });

            deleteBtn.addEventListener('click', function() {
                manager.deleteTask(listItem);
            });

            listItem.append(taskInput, changeBtn, doneBtn, deleteBtn);
            document.getElementById('list').append(listItem);

            input.value = "";
        }
    },

    changeTask: function(taskInput, changeBtn, listItem) {
        if (taskInput.hasAttribute('disabled')) {
            taskInput.removeAttribute('disabled');
            changeBtn.innerText = 'Spara';
        } else {
            if (taskInput.value.trim() == '') {
                errorMessage.innerHTML = 'Ej tillåtet att spara tomma sysslor!';
            } else {
                errorMessage.innerHTML = '';
                taskInput.setAttribute('disabled', 'true');
                changeBtn.innerText = 'Ändra';
            }
        }
    },

    doneTask: function(listItem, doneBtn) {
        document.getElementById('list2').append(listItem);
        doneBtn.remove();
    },

    deleteTask: function(listItem) {
        listItem.remove();
    },

    resetTasks: function() {
        document.getElementById('list').innerHTML = '';
        document.getElementById('list2').innerHTML = '';
        document.getElementById('errorMessage').innerHTML = '';
    }
};

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let newTaskInput = document.getElementById('din-syssla');
    manager.addTask(newTaskInput);
});

let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function () {
    manager.resetTasks();
});