document.addEventListener("DOMContentLoaded", function () {
    // Variables
    const container = document.querySelector('.container');
    const taskForm = document.getElementById('new_task_form');
    const tasksList = document.getElementById('tasksList');

    // Function to create a new task
    function addTask(newTask) {
        // Create list item
        const newTaskItem = document.createElement('li');
        newTaskItem.classList.add('task_item');

        // Create checkbox element
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task_checkbox');
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                newTaskBio.classList.add('completed');
            } else {
                newTaskBio.classList.remove('completed');
            }
        });

        // Create span element for task description
        const newTaskBio = document.createElement('span');
        newTaskBio.classList.add('task_bio');
        newTaskBio.innerText = newTask;

        // Create div for buttons
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button_div');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-button", "text-red-600", "ml-2", "focus:outline-none");
        deleteButton.addEventListener("click", function () {
            newTaskItem.remove();
            if (tasksList.children.length === 0) {
                container.classList.add('task_list_empty');
            }
        });

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = "✎";
        editButton.classList.add("edit-button", "text-blue-600", "ml-2", "focus:outline-none");
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit task:", newTask);
            if (newText !== null) {
                newTaskBio.innerText = newText;
            }
        });

        // Append elements to the list item
        newTaskItem.appendChild(checkbox);
        newTaskItem.appendChild(newTaskBio);
        buttonDiv.appendChild(deleteButton);
        buttonDiv.appendChild(editButton);

        // Append list item to the tasks list
        newTaskItem.appendChild(buttonDiv);
        tasksList.appendChild(newTaskItem);
    }

    // Add task when form is submitted
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newTaskInputValue = taskForm.elements.new_task_input.value.trim();
        if (newTaskInputValue !== '') {
            addTask(newTaskInputValue);
            taskForm.reset(); // Reset form
            container.classList.remove('task_list_empty');
        }
    });
});
