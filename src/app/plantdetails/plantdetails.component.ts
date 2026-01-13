import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlant } from '../plants/plant.model';
import { onImgError, getImageUrl } from '../shared/imagehelper';

@Component({
  selector: 'app-plantdetails',
  templateUrl: './plantdetails.component.html',
  styleUrls: ['./plantdetails.component.scss'],
})
export class PlantdetailsComponent {
  @Input() plant!: IPlant;
  @Output() add = new EventEmitter();
  public onImgError = onImgError;
  public getImageUrl = getImageUrl;

  addPlant(plant: IPlant) {
    this.add.emit();
  }
}

