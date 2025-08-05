document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');


  addBtn.addEventListener('click', addTask);


  taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
  });

  function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

  
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskValue;


    taskSpan.addEventListener('click', function() {
      listItem.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '×';
    removeBtn.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
    taskInput.focus();
  }
});
