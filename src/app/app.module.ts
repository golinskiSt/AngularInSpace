import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { A2sCommModule } from 'a2s-comm';
import { HangarComponent } from './space/hangar/hangar.component';
import { SpaceShipComponent } from './space/space-ship/space-ship.component';
import { PilotComponent } from './space/pilot/pilot.component';
import { PilotRoomComponent } from './space/pilot-room/pilot-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    A2sCommModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
