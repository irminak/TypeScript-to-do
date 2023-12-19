// <li>
//     <label for='task-1'>Wyrzucić śmieci</label>
//     <input
//         type='checkbox'
//         id='task-1'
//         name='Wyrzucić śmieci'
//     />
// </li>;
const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

const tasks: { name: string; done: boolean }[] = [
    { name: 'Wyrzucić śmieci', done: false },
    { name: 'Pójść na siłkę', done: true },
    { name: 'Nakarmić psa', done: false },
];

const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement('li');
        const id: string = `task ${index}`;
        const taskLabelElement: HTMLLabelElement =
            document.createElement('label');
        taskLabelElement.innerText = task.name;
        taskLabelElement.setAttribute('for', id);

        const checkboxElement: HTMLInputElement =
            document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.name;

        tasksContainerElement.appendChild(taskElement);
    });
};

const addTask = (taskName: string) => {
    tasks.push({ name: taskName, done: false });
};

addButtonElement.addEventListener('click', (e: Event) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});

render();
