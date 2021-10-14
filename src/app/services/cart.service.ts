import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartSummaryComponent } from '../components/cart-summary/cart-summary.component';
import { CartItem } from '../models/cartitem';
import { CartItems } from '../models/cartıtems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastrService: ToastrService) { }

  totalPrice:number=0
  payment:number=0

  addToCart(product: Product) {
    let item = CartItems.find(c => c.product.productId === product.productId)
    if (item) {
      item.quantity += 1
      this.totalPrice=(item.quantity)*(product.unitPrice)
    } else {
      let cartitem = new CartItem();
      cartitem.product = product
      cartitem.quantity = 1;
      CartItems.push(cartitem)
    }
  }

  list(): CartItem[] {
    return CartItems;
  }
  removeFromCart(product: Product) {
    let item = CartItems.find(c => c.product.productId === product.productId)
    if (item.quantity > 1) {
      item.quantity -= 1
      this.totalPrice=(item.quantity)*(product.unitPrice)
    } else {
      item.quantity === 1,
        CartItems.splice(CartItems.indexOf(item))
      this.toastrService.error("ürün silindi")
    }
  }

}
