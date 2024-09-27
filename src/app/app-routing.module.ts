import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-tasks', pathMatch: 'full' },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'list-tasks', component: ListTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
