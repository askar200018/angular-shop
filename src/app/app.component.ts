import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-shop';
  basketCount: number;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getBasketProducts().subscribe((response) => {
      this.basketCount = response.length;
    });
  }
}
