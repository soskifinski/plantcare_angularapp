export interface IPlant{
    id: number;
    description: string;
    name: string;
    latin: string;
    imageName: string;
    category: string;
    poisonous: boolean; 
    edible: boolean;
    hardyInWinter: boolean;
    lightRequirement: string;
    leafColor: string;
    bloomingPeriod: string;
    harvestMonths: Int16Array;
    fertilizingCycle: Int16Array;
    wateringCycle: Int16Array
    soilType: string;
}