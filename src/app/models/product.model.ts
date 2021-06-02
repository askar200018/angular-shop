export interface Product {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  price: number;
}

export interface BasketProduct {
  product: Product;
  count: number;
}
