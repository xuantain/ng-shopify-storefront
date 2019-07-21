import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { ProductModule } from './product/product.module';

import { ProductService } from '../common/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
    HomeModule,
    ProductsModule,
    ProductModule
  ],
  declarations: [
  ],
  providers: [
    ProductService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LayoutModule
  ]
})
export class PagesModule {}
