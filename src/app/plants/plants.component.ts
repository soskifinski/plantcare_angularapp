import { Component } from '@angular/core';
import { IPlant } from './plant.model';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})

export class PlantsComponent { 
  plants: IPlant[];
  filter: string = '';
  myplants: IPlant[] = [];


    constructor(private accountservice: AccountService) {
  this.plants = [
    {
      id: 1,
      name: 'Rosmarin',
      latin: 'Rosmarinus officinalis',
      description: 'Ein mediterranes Küchenkraut mit intensivem Aroma, das oft zu Fleischgerichten passt.',
      imageName: 'rosmarin',
      category: 'Gartenpflanze',
      poisonous: false,
      edible: true,
      hardyInWinter: true,
      lightRequirement: 'Sonnig',
      leafColor: 'Grün',
      bloomingPeriod: 'Frühling bis Sommer',
      harvestMonths: new Int16Array([4, 5, 6, 7, 8, 9]),
      fertilizingCycle: new Int16Array([3, 6]),
      wateringCycle: new Int16Array([5, 6, 7, 8]),
      soilType: 'sandig, trocken'
    },
    {
      id: 2,
      name: 'Erdbeere',
      latin: 'Fragariax ananassa',
      description: 'Eine süße rote Fruchtpflanze, beliebt in Desserts und als Snack.',
      imageName: 'erdbeere',
      category: 'Gartenpflanze',
      poisonous: false,
      edible: true,
      hardyInWinter: true,
      lightRequirement: 'Sonnig',
      leafColor: 'Grün',
      bloomingPeriod: 'Frühling',
      harvestMonths: new Int16Array([5, 6, 7]),
      fertilizingCycle: new Int16Array([3, 5]),
      wateringCycle: new Int16Array([4, 5, 6, 7]),
      soilType: 'humusreich'
    },
    {
      id: 3,
      name: 'Monstera',
      latin: 'Monstera deliciosa',
      description: 'Eine tropische Zimmerpflanze mit charakteristischen, geschlitzten Blättern.',
      imageName: 'monstera',
      category: 'Zimmerpflanze',
      poisonous: true,
      edible: false,
      hardyInWinter: false,
      lightRequirement: 'Indirektes helles Licht',
      leafColor: 'Grün',
      bloomingPeriod: 'Selten',
      harvestMonths: new Int16Array([]),
      fertilizingCycle: new Int16Array([4, 6, 8]),
      wateringCycle: new Int16Array([3, 4, 5, 6, 7, 8, 9]),
      soilType: 'torfhaltig, gut durchlässig'
    },
    {
      id: 4,
      name: 'Basilikum',
      latin: 'Ocimum basilicum',
      description: 'Ein aromatisches Kraut, besonders beliebt in der italienischen Küche.',
      imageName: 'basilikum',
      category: 'Gartenpflanze',
      poisonous: false,
      edible: true,
      hardyInWinter: false,
      lightRequirement: 'Sonnig',
      leafColor: 'Grün',
      bloomingPeriod: 'Sommer',
      harvestMonths: new Int16Array([6, 7, 8, 9]),
      fertilizingCycle: new Int16Array([5, 7]),
      wateringCycle: new Int16Array([5, 6, 7, 8]),
      soilType: 'feucht, gut durchlässig'
    },
    {
      id: 5,
      name: 'Mirabelle',
      latin: 'Prunus domestica subsp. syriaca',
      description: 'Eine gelbe Pflaumenart mit süßem Geschmack, ideal für Marmeladen und Kuchen.',
      imageName: 'mirabelle',
      category: 'Gartenpflanze',
      poisonous: false,
      edible: true,
      hardyInWinter: true,
      lightRequirement: 'Sonnig bis halbschattig',
      leafColor: 'Grün',
      bloomingPeriod: 'Frühling',
      harvestMonths: new Int16Array([8]),
      fertilizingCycle: new Int16Array([3, 6]),
      wateringCycle: new Int16Array([4, 5, 6, 7, 8]),
      soilType: 'nährstoffreich, gut durchlässig'
    },
    {
      id: 6,
      name: 'Japanischer Ahorn',
      latin: 'Acer palmatum',
      description: 'Ein dekorativer Laubbaum mit farbenfrohem Herbstlaub, beliebt in Ziergärten.',
      imageName: 'ahorn',
      category: 'Gartenpflanze',
      poisonous: false,
      edible: false,
      hardyInWinter: true,
      lightRequirement: 'Halbschattig',
      leafColor: 'Rot bis orange',
      bloomingPeriod: 'Frühling',
      harvestMonths: new Int16Array([]),
      fertilizingCycle: new Int16Array([4]),
      wateringCycle: new Int16Array([5, 6, 7]),
      soilType: 'leicht sauer, humusreich'
    },
    {
      id: 7,
      name: 'Süßkirsche',
      latin: 'Prunus avium',
      description: 'Ein hoher Obstbaum mit süßen roten Früchten, beliebt bei Mensch und Tier.',
      imageName: 'suesskirsche',
      category: 'Gartenpflanze',
      poisonous: false,
      edible: true,
      hardyInWinter: true,
      lightRequirement: 'Sonnig',
      leafColor: 'Grün',
      bloomingPeriod: 'Frühling',
      harvestMonths: new Int16Array([6, 7]),
      fertilizingCycle: new Int16Array([3, 6]),
      wateringCycle: new Int16Array([4, 5, 6, 7]),
      soilType: 'tiefgründig, durchlässig, kalkhaltig'
    },
    {
      id: 8,
      name: 'Forellenbegonie',
      latin: 'Begonia maculata',
      description: 'Eine exotische Zimmerpflanze mit auffällig gepunkteten Blättern.',
      imageName: 'forellenbegonie',
      category: 'Zimmerpflanze',
      poisonous: true,
      edible: false,
      hardyInWinter: false,
      lightRequirement: 'Helles, indirektes Licht',
      leafColor: 'Grün mit weißen Punkten',
      bloomingPeriod: 'Frühling bis Herbst',
      harvestMonths: new Int16Array([]),
      fertilizingCycle: new Int16Array([4, 6, 8]),
      wateringCycle: new Int16Array([4, 5, 6, 7, 8]),
      soilType: 'luftig, leicht feucht'
    },
    {
      id: 9,
      name: 'Aloe Vera',
      latin: 'Aloe barbadensis miller',
      description: 'Eine sukkulente Heilpflanze, deren Gel oft für Hautpflege verwendet wird. Giftig für Haustiere.',
      imageName: 'aloevera',
      category: 'Zimmerpflanze',
      poisonous: true,
      edible: true,
      hardyInWinter: false,
      lightRequirement: 'Sonnig',
      leafColor: 'Grün',
      bloomingPeriod: 'Sommer',
      harvestMonths: new Int16Array([5, 6, 7, 8]),
      fertilizingCycle: new Int16Array([4, 7]),
      wateringCycle: new Int16Array([5, 6, 7, 8]),
      soilType: 'sandig, gut drainiert, kaktuserde'
    },
    {
    id: 10,
    name: 'Gummibaum',
    latin: 'Ficus elastica',
    description: 'Eine pflegeleichte Zimmerpflanze mit großen, glänzenden Blättern.',
    imageName: 'gummibaum',
    category: 'Zimmerpflanze',
    poisonous: true,
    edible: false,
    hardyInWinter: false,
    lightRequirement: 'Helles, indirektes Licht',
    leafColor: 'Dunkelgrün',
    bloomingPeriod: 'Selten',
    harvestMonths: new Int16Array([]),
    fertilizingCycle: new Int16Array([4, 6, 8]),
    wateringCycle: new Int16Array([4, 5, 6, 7, 8]),
    soilType: 'locker, gut durchlässig'
  },
{
  id: 11,
  name: 'Glücksfeder',
  latin: 'Zamioculcas zamiifolia',
  description: 'Sehr robuste Pflanze, überlebt auch bei wenig Licht und Wasser.',
  imageName: 'glücksfeder',
  category: 'Zimmerpflanze',
  poisonous: true,
  edible: false,
  hardyInWinter: false,
  lightRequirement: 'Halbschattig bis schattig',
  leafColor: 'Dunkelgrün',
  bloomingPeriod: 'Selten',
  harvestMonths: new Int16Array([]),
  fertilizingCycle: new Int16Array([4, 8]),
  wateringCycle: new Int16Array([3, 5, 7]),
  soilType: 'gut drainiert, kaktusähnlich'
},
{
  id: 12,
  name: 'Einblatt',
  latin: 'Spathiphyllum',
  description: 'Bekannt für ihre weißen Blüten und luftreinigende Wirkung.',
  imageName: 'einblatt',
  category: 'Zimmerpflanze',
  poisonous: true,
  edible: false,
  hardyInWinter: false,
  lightRequirement: 'Halbschattig',
  leafColor: 'Grün',
  bloomingPeriod: 'Frühling bis Herbst',
  harvestMonths: new Int16Array([]),
  fertilizingCycle: new Int16Array([4, 6, 8]),
  wateringCycle: new Int16Array([4, 5, 6, 7, 8]),
  soilType: 'feucht, humos, gut durchlässig'
},
{
  id: 13,
  name: 'Fensterblatt',
  latin: 'Monstera adansonii',
  description: 'Verwandt mit der klassischen Monstera, aber mit kleinen, durchlöcherten Blättern.',
  imageName: 'fensterblatt',
  category: 'Zimmerpflanze',
  poisonous: true,
  edible: false,
  hardyInWinter: false,
  lightRequirement: 'Indirektes Licht',
  leafColor: 'Grün',
  bloomingPeriod: 'Sehr selten',
  harvestMonths: new Int16Array([]),
  fertilizingCycle: new Int16Array([4, 6, 8]),
  wateringCycle: new Int16Array([3, 4, 5, 6, 7, 8, 9]),
  soilType: 'torfhaltig, durchlässig'
},
{
  id: 14,
  name: 'Schwiegermutterzunge',
  latin: 'Sansevieria trifasciata',
  description: 'Extrem pflegeleicht, ideal für Anfänger. Benötigt kaum Wasser.',
  imageName: 'schwiegermutterzunge',
  category: 'Zimmerpflanze',
  poisonous: true,
  edible: false,
  hardyInWinter: false,
  lightRequirement: 'Sonnig bis schattig',
  leafColor: 'Grün mit gelben Rändern',
  bloomingPeriod: 'Selten',
  harvestMonths: new Int16Array([]),
  fertilizingCycle: new Int16Array([3, 7]),
  wateringCycle: new Int16Array([4, 7]),
  soilType: 'sandig, kaktusgeeignet'
}

  ];
}

 

    getFilterProducts() {
      const filtered = this.filter === ''
      ? this.plants
      : this.plants.filter((plant) => plant.category === this.filter);

      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    addToAccount(plant: IPlant) {
       console.log('addToAccount wurde aufgerufen mit Pflanze:', plant);
      this.accountservice.add(plant);
    }

  
}
