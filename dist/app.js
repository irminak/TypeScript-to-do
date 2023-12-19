// <li>
//     <label for='task-1'>Wyrzucić śmieci</label>
//     <input
//         type='checkbox'
//         id='task-1'
//         name='Wyrzucić śmieci'
//     />
// </li>;
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const tasks = [
    { name: 'Wyrzucić śmieci', done: false },
    { name: 'Pójść na siłkę', done: true },
    { name: 'Nakarmić psa', done: false },
];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        const id = `task ${index}`;
        const taskLabelElement = document.createElement('label');
        taskLabelElement.innerText = task.name;
        taskLabelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.name;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
