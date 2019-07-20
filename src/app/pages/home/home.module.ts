import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { HomeComponent } from './home.component';

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
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
