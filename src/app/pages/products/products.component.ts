import { Component } from '@angular/core';
import { Product } from '../../common/models';
import { ProductService } from '../../common/services';

@Component({
  selector: 'products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(
    private productService: ProductService
  ) {}

  breakpoint: number = 1;
  products: Product[];

  ngOnInit() {
    this.calculateShownCols(window.innerWidth);
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getProductList()
      .subscribe(products => this.products = products);
  }

  onResize(event) {
    this.calculateShownCols(event.target.innerWidth);
  }

  calculateShownCols(screenWidth:number) {
    if (screenWidth <= 400) {
      this.breakpoint = 1;
    } else if (screenWidth <= 800) {
      this.breakpoint = 2;
    } else if (screenWidth <= 1060) {
      this.breakpoint = 3;
    } else {
      this.breakpoint = 4;
    }
  }
}
