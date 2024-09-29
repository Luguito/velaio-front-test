import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NewTaskComponent } from './new-task.component';

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaskComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    });
    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should not create a person if the form is invalid', () => {
    component.addPerson();

    expect(component.assignedTo.length).toBe(0);
  });
});
