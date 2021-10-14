import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Product[]=[];
  product: Product
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,private toastrService:ToastrService,private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["productId"]) {
        this.getProduct(params["productId"])
      }
    })

  }
  getProduct(productId: number) {
    this.productService.getProduct(productId).subscribe(response => {
      this.products = response.data
    })
  }
  addToCart(product: Product) {
    this.toastrService.success("sepete eklendi")
    this.cartService.addToCart(product)
  }

}
