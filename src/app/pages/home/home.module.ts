import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeComponent } from './home.component';
import { from } from 'zen-observable';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    CommonModule,
    MatGridListModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
