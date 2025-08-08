import { Component } from '@angular/core';
import { IPlant } from '../plants/plant.model';
import { AccountService } from './account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  myPlants$: Observable<IPlant[]>;

  constructor(private accountservice: AccountService) {
    this.myPlants$ = this.accountservice.myPlants$;
  }
}
