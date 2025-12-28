import { IPlant } from '../plants/plant.model';
import { IAccount } from '../account/account.model';

export enum Rhythm {
  SINGLE = 'single',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}


export enum TaskType {
  WATER = 'water',
  FERTILIZE = 'fertilize',
  PRUNE = 'prune',
  REPOT = 'repot',
}

export interface ITask {
  id: number;
  account: IAccount;    
  accountId: IAccount['id'];
  plant: IPlant;
  plantId: IPlant['id'];
  rhythm: Rhythm;
  status: boolean;
  type: TaskType;
  lastCompletedOn: Date;
  date: Date;
  nextDueOn: Date;
  createdOn: Date;
  updatedOn: Date;
}
