import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../common/models';
import { ProductService } from '../../common/services';

@Component({
  selector: 'product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
}
