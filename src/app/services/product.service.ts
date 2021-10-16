import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [

    new Product(1,'product name1','this is product 1 description',100),
    new Product(2,'product name2','this is product 2 description',200),
    new Product(3,'product name3','this is product 3 description',300),
    new Product(4,'product name4','this is product 4 description',400),
    new Product(5,'product name5','this is product 5 description',500),
    new Product(6,'product name6','this is product 5 description',600),
    new Product(7,'product name7','this is product 5 description',700),
    new Product(8,'product name8','this is product 5 description',800),
    new Product(9,'product name9','this is product 5 description',900)
    



  ]

  constructor() { }

  getProducts(): Product[]
  {
    return this.products
  }
}
