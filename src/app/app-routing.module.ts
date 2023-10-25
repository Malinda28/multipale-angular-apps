import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassicAppModule } from '../../projects/classic/src/app/app.module';
import { CultureSpaceAppModule } from 'projects/culture-space/src/app/app.module';
import { DemoAppModule } from 'projects/demo/src/app/app.module';


const routes: Routes = [
  {
    path: 'classic',
    loadChildren: () => import('../../projects/classic/src/app/app.module').then(m => m.ClassicAppModule),
  },
  {
    path: 'culture-space',
    loadChildren: () => import('../../projects/culture-space/src/app/app.module').then(m => m.CultureSpaceAppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ClassicAppModule.forRoot(),
  CultureSpaceAppModule.forRoot(),
  DemoAppModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }