import { Category } from '../types/types.js';

export class TaskClass {
    name: string;
    done: boolean;
    category?: Category;

    private createdAt: Date;

    constructor(name: string, done: boolean, category?: Category) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }

    public logCreationdate(extra: string) {
        console.log(`Task został stworzony ${this.createdAt} ${extra}`);
    }
}
