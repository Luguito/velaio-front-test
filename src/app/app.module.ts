import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ButtonComponent } from './components/button/button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ArrayJoinPipe } from './pipes/separator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    ArrayJoinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    InputFieldComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
