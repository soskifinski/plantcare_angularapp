import { Component } from '@angular/core';
import { IPlant } from '../plants/plant.model';
import { AccountService } from './account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})

export class AccountComponent {
  myPlants$: Observable<IPlant[]>;

  constructor(private accountService: AccountService) {
    this.myPlants$ = this.accountService.myPlants$;
  }

  onImgError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = 'assets/img/default.jpg';
  }

  removeFromAccount(plantId: number): void {
    this.accountService.remove(plantId);
    console.log('Pflanze (Id)', plantId, 'wurde aus dem Account entfernt');
  }

   addTask(plantId: number): void {
    //TODO: Implement addToDo functionality
    console.log('Aufgabe für Pflanze (Id)', plantId, 'wurde erstellt');
  }
}