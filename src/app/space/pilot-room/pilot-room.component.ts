import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Pilot } from '../pilot';
import { HangarComponent } from '../hangar/hangar.component';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  @Output() selected = new EventEmitter<Pilot>();
  @ViewChild(HangarComponent) hangar:HangarComponent;
  selectedPilot = null;
  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Janusz', 'assets/pilot.jpg'));
    this.pilots.push(new Pilot('Karol', 'assets/pilot.jpg'));
    this.pilots.push(new Pilot('Graża', 'assets/pilot2.jpg'));
    this.pilots.push(new Pilot('Karolina', 'assets/pilot2.jpg'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }
}
