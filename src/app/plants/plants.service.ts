import { Injectable } from '@angular/core';
import { IPlant } from '../plants/plant.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
    private Plants = new BehaviorSubject<IPlant[]>([]);
    myPlants$ = this.Plants.asObservable();

  constructor() {}

  getPlantById(id:number): IPlant | null {
    return  this.Plants.value.find((p) => p.id === id) || null;
  }

  add(plant: IPlant): boolean {
    const currentPlants = this.Plants.value;

    if (currentPlants.some((p) => p.name === plant.name)) {
      console.warn(`Pflanze mit Name ${plant.name} ist bereits vorhanden`);
      return false;
    }

    this.Plants.next([...currentPlants, plant]);
    return true;
  }

  remove(plantId: number) {
    const updated = this.Plants.value.filter((p) => p.id !== plantId);
    this.Plants.next(updated);
  }
}
