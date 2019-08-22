import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip{

  constructor(name = 'name', imagePath = 'assets/ship2.pmg', pilot?: Pilot){
    super(name, imagePath, pilot);
  }
}
