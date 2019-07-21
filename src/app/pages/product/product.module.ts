import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { ProductComponent } from "./product.component";

const productsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'products',
    component: ProductComponent
  }
]);

@NgModule({
  imports: [
    productsRouting,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  declarations: [
    ProductComponent
  ],
  providers: []
})
export class ProductModule {}
