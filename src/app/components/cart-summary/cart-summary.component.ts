import { getLocaleExtraDayPeriods } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
cartItems:CartItem[]=[];

constructor(private cartService:CartService,private toastrService:ToastrService){}
ngOnInit():void{
this.getCart();
}

getCart(){
  this.cartItems = this.cartService.list();
}

removeFromCart(product:Product){
  this.cartService.removeFromCart(product);
  this.toastrService.error("Silindi.",product.productName+"Sepetten Silindi.")
}
}
