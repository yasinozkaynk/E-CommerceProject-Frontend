import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
 

  filterText: ""
  dataLoaded=false
  products:Product[]=[]
  constructor(public authService:AuthService,private router:Router,public productService:ProductService,private activatedRout:ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRout.params.subscribe(params=>{
      if(params["userId"]){
        this.userIdProduct(params["userId"])
      }
      if(this.isAuthenticated()){
        this.authService.userDetailFromToken();  
      }     
    })
  }
  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true
    }
    else{
      return false
    }
   }
   userIdProduct(userId=this.authService.userId){
    this.productService.getUserProductId(userId).subscribe(response=>{
      this.products=response.data
    })
  }
   checkAdminRole(){
    if(this.authService.role=="admin"){
      return true
    }
    else{
      return false
    }
   }
   checkUserRole(){
    if(this.authService.role=="user"){
      return true
    }
    else{
      return false
    }
   }
   logOut() {
    this.authService.logout();
    this.router.navigate([''])
  }
  refresh(): void {
    window.location.reload();
}

   
}