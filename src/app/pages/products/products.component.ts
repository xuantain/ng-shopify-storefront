import { Component } from '@angular/core';

export interface Product {
  color: string;
  cols: number;
  rows: number;
  name: string;
  price: number;
  currency: string;
  image: string;
}

@Component({
  selector: 'products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // constructor() {}
  breakpoint: number = 1;

  products: Product[] = [
    {name: 'Henning SS Crew', price: 32.0, currency: '$', cols: 1, rows: 1, color: 'lightblue', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/henning-ss-crew.jpg?v=1491851181'},
    {name: 'DOUBLE RACER BACK DRESS', price: 336.0, currency: '$', cols: 1, rows: 1, color: 'lightgreen', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/DKNY_Double_Racer_Back_Dress.jpg?v=1491851295'},
    {name: 'DKNYPURE PONCHO TOP', price: 166.22, currency: '$', cols: 1, rows: 1, color: 'lightpink', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/DKNYPURE_PONCHO_TOP_3.jpg?v=1491851207'},
    {name: 'Mens Henning U Scoop', price: 28.0, currency: '$', cols: 1, rows: 1, color: '#DDBDF1', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/004.jpg?v=1491851162'},
  ];

  ngOnInit() {
    this.calculateShownCols(window.innerWidth);
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
