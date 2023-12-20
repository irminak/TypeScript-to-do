import { Category } from '../types/types.js';
export const render = (tasks, tasksContainerElement) => {
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
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log('Zmiana na general');
    }
    else if (category === Category.GYM) {
        alert('LECISZ NA SIŁKĘ');
    }
    else if (category === Category.WORK) {
        document.body.style.background = 'red';
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const renderCategories = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement('li');
        const radioInputElement = document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener('change', () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
