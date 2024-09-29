import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-tasks', pathMatch: 'full' },
  { path: 'list-tasks', component: ListTasksComponent },
  { path: 'new-task', loadComponent: () => import('./new-task/new-task.component').then(m => m.NewTaskComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
