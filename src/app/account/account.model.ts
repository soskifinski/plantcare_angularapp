import { IPlant } from '../plants/plant.model';

export interface IAccount{
    id: number;
    userEmail: string;
    passwordHash: string;
    plants?: IPlant[];
}