import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basketProducts: BasketProduct[];
  constructor(
    private _productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._productService.getBasketProducts().subscribe((response) => {
      this.basketProducts = response;
    });
  }

  removeFromBasket(productId): void {
    this._productService.deleteProductFromBasket(productId);
  }

  calculateTotal(): number {
    return this.basketProducts.reduce((acc, b) => {
      console.log(acc, b);
      return acc + b.product.price * b.count;
    }, 0);
  }

  checkout(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
