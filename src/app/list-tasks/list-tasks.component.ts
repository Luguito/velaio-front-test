import { Component, inject } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {
  _taskService = inject(TaskService);
  public listTasks: Observable<any> = this._taskService.getTasks();


  filter(status: boolean | string) {
    this._taskService.filterTasks(status);
  }

  markAsCompleted(index: number): void {
    this._taskService.completeTask(index);
  }
}
