import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { addDestinationPage } from './add-destination/add-destination.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'destination',
    loadChildren: () => import('./destination/destination.module').then( m => m.DestinationPageModule)
  },
  {
    path: 'add',
    component: addDestinationPage  
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
