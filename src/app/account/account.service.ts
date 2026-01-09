import { Injectable } from '@angular/core';
import { IPlant } from '../plants/plant.model';
import { IAccount } from './account.model';
import { BehaviorSubject } from 'rxjs';
import { MOCK_PLANTS } from '../plants/plant.mock';
import { PlantService } from '../plants/plants.service';

@Injectable({
  providedIn: 'root',
})


export class AccountService {
  private myPlantsSubject = new BehaviorSubject<IPlant[]>(MOCK_PLANTS);
  myPlants$ = this.myPlantsSubject.asObservable();
  private currentAccount: IAccount | null = null;
  isLoggedIn = this.currentAccount !== null;

  constructor(private plantService: PlantService) {}
  getCurrentAccount(): IAccount | null {

    
    return this.currentAccount;
  }
  getCurrentAccountId(): number {
    // Dummy implementation, replace with actual logic to get the current account ID
    return 1;
  }

  setCurrentAccountId(id: number): void {
    const plants = this.plantService.getAll();

    this.currentAccount = { id, userEmail: '', passwordHash: '', plants: [] };

    this.myPlantsSubject.next(plants);
  }

  add(plant: IPlant): boolean {
    const currentPlants = this.myPlantsSubject.value;

    if (currentPlants.some((p) => p.id === plant.id)) {
      console.warn(`Pflanze mit ID ${plant.id} ist bereits vorhanden`);
      return false;
    }

    this.myPlantsSubject.next([...currentPlants, plant]);
    return true;
  }

  remove(plantId: number) {
    const updated = this.myPlantsSubject.value.filter((p) => p.id !== plantId);
    this.myPlantsSubject.next(updated);
  }
}
