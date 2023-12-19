const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const tasks = [
    { title: 'Wyrzucić śmieci', done: false },
    { title: 'Pójść na siłkę', done: true, category: 'gym' },
    { title: 'Nakarmić psa', done: false, category: 'work' },
];
const categories = ['general', 'work', 'gym'];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        task.category && taskElement.classList.add(task.category);
        const id = `task ${index}`;
        const taskLabelElement = document.createElement('label');
        taskLabelElement.innerText = task.title;
        taskLabelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.title = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener('change', () => (task.done = !task.done));
        taskElement.appendChild(taskLabelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement('li');
        const radioInputElement = document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener('change', () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({
        title: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render();
});
renderCategories();
render();
