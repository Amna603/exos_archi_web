import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { addDestinationPage } from './add-destination.page';


const routes: Routes = [
  {
    path: '',
    component: addDestinationPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class addDestinationPageRoutingModule {}
