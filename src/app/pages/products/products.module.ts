import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { ProductsComponent } from "./products.component";

const productsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'products',
    component: ProductsComponent
  }
]);

@NgModule({
  imports: [
    productsRouting,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule
  ],
  declarations: [
    ProductsComponent
  ],
  providers: []
})
export class ProductsModule {}
