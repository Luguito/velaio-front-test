import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {
  tasks = [
    {
      name: 'Tarea 1', status: false, limitDate: new Date(), assignedTo: [
        { name: 'Juan', age: 25, skills: ['Typescript', 'Angular'] },
        { name: 'Pedro', age: 30, skills: ['Typescript', 'Angular'] },
        { name: 'Carlos', age: 35, skills: ['Typescript', 'Angular', 'Angular', 'Angular', 'Angular', 'Angular'] }
      ]
    },
    {
      name: 'Tarea 2', status: false, limitDate: new Date(), assignedTo: [
        { name: 'Juan', age: 25, skills: ['Typescript', 'Angular'] },
        { name: 'Pedro', age: 30, skills: ['Typescript', 'Angular'] },
        { name: 'Carlos', age: 35, skills: ['Typescript', 'Angular'] }
      ]
    },
    {
      name: 'Tarea 3', status: true, limitDate: new Date(), assignedTo: [
        { name: 'Juan', age: 25, skills: [] },
        { name: 'Pedro', age: 30, skills: [] },
        { name: 'Carlos', age: 35, skills: [] }
      ]
    }
  ]
}
