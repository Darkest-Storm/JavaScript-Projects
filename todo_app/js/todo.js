/* This function gets the task from input */
function get_todos(){
    /* This creates an array of tasks that are input */
    var todos = new Array;
    /* This pulls the task that was saved in browser memory */
    var todos_str = localStorage.getItem('todo');
    /* If the input is not null then JSON.parse will communicate 
    with the browser to make the task a JS Object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* This function adds the inputed task to the get_todos function array */
function add(){
    /* This takes the input task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* This adds a new task to the end of the array */
    todos.push(task);
    /* This converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}

/* This function keeps the tasks on screen permanently */
function show(){
    /* This sets the task that was retrieved as a variable */
    var todos = get_todos();

    /* This sets up each task in an unordered list */
    var html = '<ul>';
    /* This displays a task to the list in inputed order */
    for (var i = 0; i < todos.length; i++){
        /* This also displays the task as a list and creates a button with the 'X' */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';

    };
    html += '</ul>';
    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;

    /* This tells the browser how to display todo array
    after an item has been removed */
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    };
}

/* This displays the inputed task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);
/* This will keeps the inputs on screen permanently */
show();

/* This is used to remove a todo item from the array */
function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /* This looks ion the show() how to display a removed item on screen */
    show();

    return false;
}