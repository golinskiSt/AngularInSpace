import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { BomberShip } from '../bomber-ship';
import { FighterShi } from '../fighter-shi';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];
  selectedPilot;
  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new BomberShip('Valkiria', 'assets/ship.png', new Pilot('Lee Adama', '/assets/pilot.jpg')));
    this.spaceShips.push(new BomberShip('Valkiria', 'assets/ship.png', new Pilot('Emil', 'assets/pilot.jpg')));
    this.spaceShips.push(new FighterShi('Valkiria', 'assets/ship.png', new Pilot('Emil', 'assets/pilot.jpg')));
    this.spaceShips.push(new FighterShi('Valkiria', 'assets/ship.png', new Pilot('Emil', 'assets/pilot.jpg')));
  }
  selectedPiot(pilot){
    this.selectedPilot = pilot;
  }

  pilot(){

  }
}
