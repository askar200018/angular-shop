import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params
      .pipe(
        switchMap((params) => {
          return this._productService.getProduct(+params.id);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.product = response;
      });
  }

  addToBasket(): void {
    console.log('addToBasket');
    this._productService.addProductToBasket(this.product);
  }
}
