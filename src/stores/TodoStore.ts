import { makeAutoObservable } from 'mobx';
import ITodoData from '../interfaces';

export default class TodoStore {
  public todos: ITodoData[] = [];

  constructor() {
    makeAutoObservable(this);

    /* Init todos from localStorage */
    this.initData();
  }

  private initData(): void {
    Object.keys(window.localStorage).forEach((key) => {
      if (key.match('todo')) {
        const todo = window.localStorage.getItem(key);

        if (todo) {
          this.todos = [JSON.parse(todo) as ITodoData, ...this.todos];
        }
      }
    });
  }

  public createTodo(data: ITodoData): void {
    window.localStorage.setItem(`todo:${data.id}`, JSON.stringify(data));
    this.todos.push(data);
  }

  public deleteTodo(id: number): void {
    const updatedTodos = this.todos.filter((todo) => todo.id !== id);

    window.localStorage.removeItem(`todo:${id}`);
    this.todos = updatedTodos;
  }

  public updateTodo(
    id: number,
    data: Pick<ITodoData, 'title' | 'updatedAt'>
  ): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (todo) {
      todo.title = data.title;
      todo.updatedAt = data.updatedAt;

      window.localStorage.setItem(`todo:${todo.id}`, JSON.stringify(todo));
    }
  }
}
