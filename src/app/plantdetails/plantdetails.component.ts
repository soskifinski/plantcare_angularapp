import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlant } from '../plants/plant.model';

@Component({
  selector: 'app-plantdetails',
  templateUrl: './plantdetails.component.html',
  styleUrls: ['./plantdetails.component.scss']
})

export class PlantdetailsComponent {

@Input() plant!: IPlant;
@Output() add = new EventEmitter()


  getImageUrl(plant: IPlant){
    return 'assets/img/'+ plant.imageName +'.jpg';
  }

 onImgError(event: Event): void {
  const element = event.target as HTMLImageElement;
  element.src = 'assets/img/default.jpg';
}

  addButtonClicked(plant: IPlant){
    this.add.emit();
  }
}


