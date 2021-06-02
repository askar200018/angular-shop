import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe((response) => {
      this.products = response;
      console.log(response);
    });
  }
}
