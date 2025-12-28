import { Component } from '@angular/core';
import { IPlant } from '../plants/plant.model';
import { PlantService } from '../plants/plants.service';
import { AccountService } from './account.service';
import { IAccount } from './account.model';
import { Rhythm } from '../tasks/task.model';
import { TaskType } from '../tasks/task.model';
import { ITask } from '../tasks/task.model';
import { TaskService } from '../tasks/task.service';
import { Observable } from 'rxjs';
import { onImgError, getImageUrl } from '../shared/imagehelper';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  myPlants$: Observable<IPlant[]>;

  constructor(
    private accountService: AccountService,
    private taskService: TaskService,
    private plantService: PlantService
  ) {
    this.myPlants$ = this.accountService.myPlants$;
    this.taskService = taskService;
  }

  public onImgError = onImgError;
  public getImageUrl = getImageUrl;

  removeFromAccount(plantId: number): void {
    this.accountService.remove(plantId);
    console.log('Pflanze (Id)', plantId, 'wurde aus dem Account entfernt');
  }

  addTask(plantId: number): void {
    const newTask: ITask = {
      id: Date.now(),
      account: this.accountService.getCurrentAccount() as IAccount,
      accountId: this.accountService.getCurrentAccountId(),
      plant: this.plantService.getPlantById(plantId) as IPlant,
      plantId: plantId,
      rhythm: Rhythm.DAILY,
      status: false,
      type: TaskType.WATER,
      lastCompletedOn: null as any,
      date: new Date(),
      nextDueOn: null as any,
      createdOn: new Date(),
      updatedOn: null as any,
    };
    this.taskService.add(newTask);
    console.log('Aufgabe für Pflanze (Id)', plantId, 'wurde erstellt');
  }
}
