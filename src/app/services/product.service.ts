import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BasketProduct, Product } from '../models/product.model';

const PRODUCTS: Product[] = [
  {
    id: 0,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 1,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 2,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 3,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 4,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 5,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 6,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 7,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 8,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 9,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 10,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 11,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 12,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
  {
    id: 13,
    imgUrl: '/assets/images/product-shoes.webp',
    title: 'КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ С ДЖУТОВОЙ СТЕЛЬКОЙ',
    description:
      'РОЗОВЫЕ КОЖАНЫЕ БОСОНОЖКИ НА КАБЛУКЕ. ТОНКИЕ КОЖАНЫЕ РЕМЕШКИ. ОБТЯНУТЫЙ КАБЛУК-ШПИЛЬКА, КВАДРАТНЫЙ НОС. ДЖУТОВАЯ СТЕЛЬКА, ПРЯЖКА НА ЩИКОЛОТКЕ.',
    price: 12990,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products$: BehaviorSubject<Product[]> = new BehaviorSubject(
    PRODUCTS
  );
  private _basketProducts$: BehaviorSubject<BasketProduct[]> =
    new BehaviorSubject([]);
  constructor() {}

  getProducts(): Observable<Product[]> {
    return this._products$.asObservable();
  }

  getProduct(productId: number): Observable<Product> {
    const products = this._products$.value;
    const product = products.find((p) => p.id === productId);
    return of(product);
  }

  getBasketProducts(): Observable<BasketProduct[]> {
    return this._basketProducts$.asObservable();
  }

  addProductToBasket(product: Product): void {
    let basketProducts = this._basketProducts$.value;
    const indexOfUpdated = basketProducts.findIndex(
      (basketProduct) => basketProduct.product.id === product.id
    );
    if (indexOfUpdated !== -1) {
      console.log(basketProducts[indexOfUpdated], 'indexOfUpdated');
      basketProducts[indexOfUpdated] = {
        product: basketProducts[indexOfUpdated].product,
        count: basketProducts[indexOfUpdated].count + 1,
      };
    } else {
      basketProducts = [...basketProducts, { product, count: 1 }];
    }
    console.log(basketProducts);
    this._basketProducts$.next(basketProducts);
  }

  deleteProductFromBasket(productId: number): void {
    let basketProducts = this._basketProducts$.value;
    const indexOfUpdated = basketProducts.findIndex(
      (basketProduct) => basketProduct.product.id === productId
    );
    basketProducts = basketProducts.filter((b) => b.product.id !== productId);
    // if (basketProducts[indexOfUpdated].count === 1) {
    //   basketProducts = basketProducts.filter((b) => b.product.id !== productId);
    // } else {
    //   basketProducts[indexOfUpdated].count--;
    // }
    this._basketProducts$.next(basketProducts);
  }
}
