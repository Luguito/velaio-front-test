import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter, merge, mergeWith, iif } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class TaskService {
    private tasks$: BehaviorSubject<any> = new BehaviorSubject([]);
    private filteredTasks$: BehaviorSubject<any> = new BehaviorSubject([...this.tasks$.value]);

    constructor() { }

    getTasks(): Observable<any> {
        return this.filteredTasks$.asObservable();
    }

    createTask(task: any): void {
        this.filteredTasks$.next([...this.filteredTasks$.value, task]);
        this.tasks$.next([...this.tasks$.value, task]);
    }

    completeTask(index: number): void {
        const data = this.tasks$.value;

        data[index].status = true;


        this.filteredTasks$.next([...data]);
    }

    filterTasks(valueFilter: any): any {
        if (valueFilter === '') {
            this.filteredTasks$.next(this.tasks$.value);
            return;
        }

        const data = this.tasks$.value;

        this.filteredTasks$.next(data.filter((task: { status: any }) => task.status === valueFilter));
    }
}