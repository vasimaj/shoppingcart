import { Component, OnInit , Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';




import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

//  @Input() productItem: Product
// productItem: Product[]
   //  @Input() productItem: Product
  // productItem: Product[]

  // @Input()
  // productItem!: Product;
  @Input()
   productItem!:Product

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }
  // handleAddToCart()
  // {
    
  //   this.msg.sendMsg(this.productItem)
  // }
  handleAddToCart()
  {
    this.msg.sendMsg(this.productItem )
  }

}
