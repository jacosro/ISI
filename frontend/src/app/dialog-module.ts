import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import { AppMaterialModule } from './material.module';

import {
  MothershipCreateDialog
} from './list-mothership/list-mothership.component';

import {
  SpaceshipCreateDialog
} from './list-spaceship/list-spaceship.component';

import {
  PassengerCreateDialog
} from './list-passenger/list-passenger.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserModule
  ],
  declarations: [
    MothershipCreateDialog,
    SpaceshipCreateDialog,
    PassengerCreateDialog
  ],
  entryComponents: [
    MothershipCreateDialog,
    SpaceshipCreateDialog,
    PassengerCreateDialog
  ]
})
export class DialogModule { }