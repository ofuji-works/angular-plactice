import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dnd-list',
  templateUrl: './dnd-list.component.html',
  styleUrls: ['./dnd-list.component.css'],
})
export class DndListComponent implements OnInit {
  todo: string[] = ['タスク1', 'タスク2', 'タスク3', 'タスク4'];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    const [todo] = this.todo.splice(event.previousIndex, 1);
    this.todo.splice(event.currentIndex, 0, todo);
  }
}
