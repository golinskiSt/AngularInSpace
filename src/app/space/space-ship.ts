import { Pilot } from './pilot';

export abstract class SpaceShip {
  modelName: string;
  imageUrl: string;
  health = 67;
  activeShields: boolean;
  activeWeapons: boolean;
  pilot;

  constructor(name: string, imagePath: string, pilot: Pilot) {
    this.modelName = name;
    this.imageUrl = imagePath;
    this.pilot = pilot;
  }


}
