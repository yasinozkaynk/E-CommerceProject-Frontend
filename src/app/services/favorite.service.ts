import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartitem';
import { CartItems } from '../models/cartıtems';
import { FavoriteItem } from '../models/favoriteItem';
import { FavoriteItems } from '../models/favoriteItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private toastrService: ToastrService) { }

  addToFavorite(product: Product) {
    let item = FavoriteItems.find(a => a.product.productId == product.productId)
    if (item) {
      item.quantity += 1
    } else {
      let favoriteItem = new FavoriteItem()
      favoriteItem.quantity = 1
      favoriteItem.product = product
      FavoriteItems.push(favoriteItem)
    }
  }
  list(): FavoriteItem[] {
    return FavoriteItems
  }
  removeFavorite(product: Product) {
    let item = FavoriteItems.find(a => a.product.productId == product.productId)
    item.quantity === 1,
      FavoriteItems.splice(CartItems.indexOf(item))
    this.toastrService.error("ürün silindi")
  }
}
