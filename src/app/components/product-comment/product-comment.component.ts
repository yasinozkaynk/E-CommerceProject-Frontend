import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComment } from 'src/app/models/productComment';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.css']
})
export class ProductCommentComponent implements OnInit {

  constructor(private product: ProductService, private productService: ProductService, private authService: AuthService, private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, private commentService: CommentService, private toastrService: ToastrService) { }

  productCommentsAddForm: FormGroup
  productComments: ProductComment[] = []
  products: Product
  productId: number

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["productId"]) {
        this.getComment(params["productId"])
        this.authService.userDetailFromToken()
        this.createCommentAddForm()
        this.productCommentsAddForm.patchValue({
          userId: this.authService.userId,
        })
      }
    })
  }
  getComment(productId: number) {
    this.productService.getAllComment(productId).subscribe(response => {
      this.productComments = response.data
    })
  }
  createCommentAddForm() {
    this.productCommentsAddForm = this.formBuilder.group({
      userId: ["", Validators.required],
      comment: ["", Validators.maxLength(100)]
    })
  }
  commentAdd() {
    if (this.productCommentsAddForm.valid) {
      let commentForm = Object.assign({}, this.productCommentsAddForm.value)
      this.commentService.commentAdd(commentForm).subscribe(response => {
        this.toastrService.info(response.message, "Yorum Başarılı")
      })
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }
  }
  isAuthenticated() {
    if (this.authService.isAuthenticated()) {
      return true
    }
    else {
      return false
    }
  }
}


