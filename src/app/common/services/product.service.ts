import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject, of } from 'rxjs';

import { Product } from '../models';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private currentProductSubject = new BehaviorSubject<Product>({} as Product);
  public currentProduct = this.currentProductSubject.asObservable().pipe(distinctUntilChanged());

  constructor (
  ) {}

  products: Product[] = [
    {name: 'Henning SS Crew', price: 32.0, currency: '$', cols: 1, rows: 1, color: 'lightblue', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/henning-ss-crew.jpg?v=1491851181'},
    {name: 'DOUBLE RACER BACK DRESS', price: 336.0, currency: '$', cols: 1, rows: 1, color: 'lightgreen', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/DKNY_Double_Racer_Back_Dress.jpg?v=1491851295'},
    {name: 'DKNYPURE PONCHO TOP', price: 166.22, currency: '$', cols: 1, rows: 1, color: 'lightpink', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/DKNYPURE_PONCHO_TOP_3.jpg?v=1491851207'},
    {name: 'Mens Henning U Scoop', price: 28.0, currency: '$', cols: 1, rows: 1, color: '#DDBDF1', image: 'https://cdn.shopify.com/s/files/1/1312/0893/products/004.jpg?v=1491851162'},
  ];

  getCurrentProduct(): Product {
    return this.currentProductSubject.value;
  }

  getProductList(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(name: string): Observable<Product> {
    return of(this.products.find(product => product.name === name));
  }

  // Update the user on the server (email, pass, etc)
  // update(product): Observable<Product> {
  //   return this.apiService
  //   .put('/product', { product })
  //   .pipe(map(data => {
  //     // Update the currentUser observable
  //     this.currentProductSubject.next(data.product);
  //     return data.product;
  //   }));
  // }

}
