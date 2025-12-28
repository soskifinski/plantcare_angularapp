import { IPlant } from '../plants/plant.model';

export function onImgError(event: Event): void {
  const element = event.target as HTMLImageElement;
  element.src = 'assets/img/default.jpg';
}

export function getImageUrl(plant: IPlant) {
  return 'assets/img/' + plant.imageName + '.jpg';
}
