export class Task {
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

export enum Category {
    GENERAL = 'general',
    WORK = 'work',
    GYM = 'gym',
}
