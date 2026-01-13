import { Component } from '@angular/core';
import { IPlant } from './plant.model';
import { AccountService } from '../account/account.service';
import { MOCK_ALL_PLANTS } from '../plants/plant.mock';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent {
  plants: IPlant[] = [];
  myplants: IPlant[] = [];

  constructor(private accountservice: AccountService) {
  }

  filter: string = '';

  ngOnInit(): void {
    this.plants = MOCK_ALL_PLANTS;

    this.accountservice.myPlants$.subscribe((plants) => {
      this.myplants = plants;
    });
  }

  getFilterProducts() {
    const filtered =
      this.filter === ''
        ? this.plants
        : this.plants.filter((plant) => plant.category === this.filter);

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  addToAccount(plant: IPlant) {
    console.log('addToAccount wurde aufgerufen mit Pflanze:', plant);
    if (!this.myplants.some((p) => p.id === plant.id)) {
      this.accountservice.add(plant);
    }
  }
}
