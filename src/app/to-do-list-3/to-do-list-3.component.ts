import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list-3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list-3.component.html',
  styleUrl: './to-do-list-3.component.scss',
})
export class ToDoList3Component {
  toDoList: ToDoList = inject(ToDoList);
  toDoStr: string = '';

  addToDo() {
    if (!this.toDoStr.trim()) {
      this.toDoStr = '';
      return;
    }
    this.toDoList.addToDo(this.toDoStr);
    this.toDoStr = '';
  }
}

@Injectable({ providedIn: 'root' })
export class ToDoList {
  toDos: ToDo[] = [];
  private lastId: number = 0;

  addToDo(toDo: string) {
    this.toDos.push(new ToDo(++this.lastId, toDo));
  }

  removeToDo(id: number) {
    const indexOfToDoToRemove = this.toDos.findIndex((x) => x.id === id);
    this.toDos.splice(indexOfToDoToRemove, 1); // remove
  }
}

export class ToDo {
  id: number = 0;
  description: string = '';

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
  }

  toString() {
    return `${this.id} ${this.description}`;
  }
}
