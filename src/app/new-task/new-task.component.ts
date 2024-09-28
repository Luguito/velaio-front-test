import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('form submitted');
  }
}
