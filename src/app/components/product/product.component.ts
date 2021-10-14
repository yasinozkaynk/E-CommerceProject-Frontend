import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  product: Product
  filterText: ""
  currentProduct: Product
  constructor(private productService: ProductService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }
      else {
        this.getProducts()
      }
    })
  }
  getProducts() {
    this.productService.getAllProducts().subscribe(response => {
      this.products = response.data
    })
  }
  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(response => {
      this.products = response.data
    })
  }

  addToCart(product: Product) {
    this.toastrService.success("sepete eklendi")
    this.cartService.addToCart(product)
  }

  addToFavorite(product: Product) {
    this.toastrService.success("Favorilere eklendi")
    this.favoriteService.addToFavorite(product)
  }
  setCurrent(product: Product) {
    this.currentProduct==product
  }
}
