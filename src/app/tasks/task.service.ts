import { Injectable } from '@angular/core';
import { ITask } from '../tasks/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private myTasksSubject = new BehaviorSubject<ITask[]>([]);
  myTasks$ = this.myTasksSubject.asObservable();

  constructor() {}

  add(task: ITask) {
    const currentTasks = this.myTasksSubject.value;
    this.myTasksSubject.next([...currentTasks, task]);
  }

  remove(taskId: number) {
    const updated = this.myTasksSubject.value.filter(t => t.id !== taskId);
    this.myTasksSubject.next(updated);
  }

  editTaskStatus(task: ITask) {
    const updated = this.myTasksSubject.value.map(t => {
      if (t=== task) {
        return { ...t, status: !t.status };
      }
      return t;
    });
    this.myTasksSubject.next(updated);
  }
}