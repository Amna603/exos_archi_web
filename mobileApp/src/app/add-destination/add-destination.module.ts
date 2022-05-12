import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { addDestinationPageRoutingModule } from './add-destination-routing.module';

import { addDestinationPage } from './add-destination.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule,
    addDestinationPageRoutingModule
  ],
  declarations: [addDestinationPage]
})
export class addDestinationPageModule {}
