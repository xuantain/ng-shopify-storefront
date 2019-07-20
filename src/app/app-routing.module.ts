import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  // {
  //   path: 'products',
  //   redirectTo: '/',
  //   component: ProductsComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
