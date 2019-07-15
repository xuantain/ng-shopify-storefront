import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatGridListModule, MatButtonModule, MatSidenavModule, MatListModule, MatCardModule } from '@angular/material';

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
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
