import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { InputFieldComponent } from '../components/input-field/input-field.component';
import { TaskService } from '../services/task.service';
import { minLengthArrayValidator } from '../validators/minLength.validator';
import { uniqueNameValidator } from '../validators/uniqueName.validator';
import swal from 'sweetalert2'
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ButtonComponent, ReactiveFormsModule]
})
export class NewTaskComponent implements OnInit {
  public taskGroup!: FormGroup;
  public personGroup!: FormGroup;
  private _taskService = inject(TaskService);
  private _router = inject(Router);
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskGroup = this._INIT_TASK_FORM;
    this.personGroup = this._INIT_PERSON_FORM
  }

  onSubmit(event: Event) {
    if (this.taskGroup.invalid) {
      this.taskGroup.markAllAsTouched();
      this.personGroup.markAllAsTouched();
      return;
    };

    this._taskService.createTask(this.taskGroup.value);
    this._router.navigate(['list-tasks']);

    swal.fire({
      title: '¡Tarea creada!',
      text: '¡Creada con éxito!',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  /**
   * Creation of Forms
   */
  get _INIT_TASK_FORM(): FormGroup {
    return this._fb.group({
      name: [, Validators.required],
      limitDate: [, Validators.required],
      assignedTo: this.assignedToGroup,
      status: false
    });
  }

  get assignedToGroup(): FormArray {
    return this._fb.array([], minLengthArrayValidator);
  }

  get _INIT_PERSON_FORM(): FormGroup {
    return this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5), uniqueNameValidator(this.assignedTo)]],
      age: [0, [Validators.required, Validators.min(18)]],
      skill: [],
      skills: this._fb.array([], [minLengthArrayValidator]),
    });
  }

  /**
   *  Get access to FormArrays
   */

  get skills(): FormArray {
    return this.personGroup.get('skills') as FormArray;
  }

  get assignedTo(): FormArray {
    return this.taskGroup.get('assignedTo') as FormArray;
  }

  /**
   * Add methods
   */

  addPerson(): void {
    if (!this.personGroup.valid) {
      this.personGroup.markAllAsTouched();
      return;
    }

    let person = this._INIT_PERSON_FORM;

    person.patchValue(this.personGroup.value);

    for (let skill of this.skills.controls) {
      (person.get('skills') as FormArray).push(skill);
    }

    this.assignedTo.push(person);

    this.personGroup.reset();
    this.skills.clear();
  }

  addSkill(): void {
    if (!this.personGroup.get('skill')?.value) return;

    const skill = this._fb.control(this.personGroup.get('skill')?.value);

    this.personGroup.get('skill')?.reset();
    this.skills.push(skill);
  }

  removePerson(index: number): void {
    this.assignedTo.removeAt(index);
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }
}
