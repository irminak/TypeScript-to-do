const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement =
    document.querySelector('.categories');

let selectedCategory: Category;

type Category = 'general' | 'work' | 'gym';
interface Task {
    title: string;
    done: boolean;
    category?: Category;
}

const tasks: Task[] = [
    { title: 'Wyrzucić śmieci', done: false },
    { title: 'Pójść na siłkę', done: true, category: 'gym' },
    { title: 'Nakarmić psa', done: false, category: 'work' },
];

const categories: Category[] = ['general', 'work', 'gym'];

const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement('li');
        task.category && taskElement.classList.add(task.category);
        const id: string = `task ${index}`;
        const taskLabelElement: HTMLLabelElement =
            document.createElement('label');
        taskLabelElement.innerText = task.title;
        taskLabelElement.setAttribute('for', id);

        const checkboxElement: HTMLInputElement =
            document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.title = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener(
            'change',
            () => (task.done = !task.done)
        );

        taskElement.appendChild(taskLabelElement);
        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);
    });
};

const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement('li');
        const radioInputElement: HTMLInputElement =
            document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener('change', () => {
            selectedCategory = category;
        });

        const labelElement: HTMLLabelElement = document.createElement('label');
        labelElement.setAttribute('for', `category-${category}`);
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
};

const addTask = (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener('click', (e: Event) => {
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
