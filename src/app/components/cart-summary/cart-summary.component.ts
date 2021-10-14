import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cartitem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor( public cartService:CartService,private activatedRoute:ActivatedRoute ) { }

  cartItems:CartItem[];
  cartItem:CartItem
  unitPrice:number
  product:Product
  amoutPaye:number=0
  totalPrice:number=0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params){
        this.getCart();
      }
    })
  }
  getCart(){
    this.cartItems=this.cartService.list()
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
  }
  addToCart(product:Product){
   this.cartService.addToCart(product)
  }
}
