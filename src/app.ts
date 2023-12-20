import { Task, Category } from './types/types.js';
import { render, renderCategories } from './helpers/render-task.helper.js';

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement =
    document.querySelector('.categories');

let selectedCategory: Category;

const tasks: Task[] = [
    new Task('Wyrzucić śmieci', false),
    new Task('Pójść na siłkę', false, Category.GYM),
    new Task('Nakarmić psa', true, Category.WORK),
];

const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener('click', (e: Event) => {
    e.preventDefault();
    addTask(new Task(taskNameInputElement.value, false, selectedCategory));
    render(tasks, tasksContainerElement);
});

renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
render(tasks, tasksContainerElement);
