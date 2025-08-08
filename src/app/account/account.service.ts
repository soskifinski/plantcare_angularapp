import { Injectable } from '@angular/core';
import { IPlant } from '../plants/plant.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private myPlantsSubject = new BehaviorSubject<IPlant[]>([]);
  myPlants$ = this.myPlantsSubject.asObservable(); 

  constructor() {}

  add(plant: IPlant) {
    const currentPlants = this.myPlantsSubject.value;
    this.myPlantsSubject.next([...currentPlants, plant]);
  }

  remove(plantId: number) {
    const updated = this.myPlantsSubject.value.filter(p => p.id !== plantId);
    this.myPlantsSubject.next(updated);
  }
}
