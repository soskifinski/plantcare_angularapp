import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../tasks/task.model';
import { TaskService } from '../tasks/task.service';
import { onImgError, getImageUrl } from '../shared/imagehelper';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks$: Observable<ITask[]> = this.taskService.myTasks$;

  todayTasks$: Observable<ITask[]>;
  tomorrowTasks$: Observable<ITask[]>;
  nextTasks$: Observable<ITask[]>;

  public onImgError = onImgError;
  public getImageUrl = getImageUrl;

  constructor(private taskService: TaskService) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(today.getDate() + 2);

    this.todayTasks$ = this.tasks$.pipe(
      map((tasks) =>
        tasks.filter(
          (task) =>
            task.nextDueOn &&
            new Date(task.nextDueOn).toDateString() === today.toDateString()
        )
      )
    );

    this.tomorrowTasks$ = this.tasks$.pipe(
      map((tasks) =>
        tasks.filter(
          (task) =>
            task.nextDueOn &&
            new Date(task.nextDueOn).toDateString() === tomorrow.toDateString()
        )
      )
    );

    this.nextTasks$ = this.tasks$.pipe(
      map((tasks) =>
        tasks.filter(
          (task) =>
            task.nextDueOn && new Date(task.nextDueOn) >= dayAfterTomorrow
        )
      )
    );
  }

  alterStatus(task: ITask) {
    this.taskService.editTaskStatus(task);
  }
}
