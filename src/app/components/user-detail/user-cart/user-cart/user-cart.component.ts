import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  products:Product[]=[]
  poductUpdateForm:FormGroup
  

  constructor(private productService:ProductService,public authService:AuthService,private activateRout:ActivatedRoute,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activateRout.params.subscribe(params=>{
      if(params["userId"]){
        this.userIdProduct(params["userId"]);
        this.productUpdate()
        this.poductUpdateForm.patchValue({
          userId:this.authService.userId,
        })
      }
    })
  
  }
  userIdProduct(userId:number){
    this.productService.getUserProductId(userId).subscribe(response=>{
      this.products=response.data
    })
  }
  productUpdate(){
    this.poductUpdateForm=this.formBuilder.group({
      productId:["",Validators.required],
      productName:["",Validators.required],
      categoryId:["",Validators.required],
      unitsInStock:["",Validators.required],
      unitPrice:["",Validators.required],
      userId:["",Validators.required],
    })
  }
  update(){
    if(this.poductUpdateForm.valid){
      let productModel = Object.assign({},this.poductUpdateForm.value)
      this.productService.update(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }

}
