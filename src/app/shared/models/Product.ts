export type exitYear = number | Date;

export interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  exitYear: exitYear;
  productHeight: number;
  productWeight: number;
  itemsProduced: number;
  quantityCart: number;
  availability: number;
  priceCart: number;
}
