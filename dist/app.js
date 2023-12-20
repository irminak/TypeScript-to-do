import { Category } from './types/types.js';
import { render, renderCategories } from './helpers/render-task.helper.js';
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const tasks = [
    { title: 'Wyrzucić śmieci', done: false },
    { title: 'Pójść na siłkę', done: true, category: Category.GYM },
    { title: 'Nakarmić psa', done: false, category: Category.WORK },
];
const categories = [Category.GENERAL, Category.WORK, Category.GYM];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({
        title: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
