import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FavoriteItem } from 'src/app/models/favoriteItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-summary',
  templateUrl: './favorite-summary.component.html',
  styleUrls: ['./favorite-summary.component.css']
})
export class FavoriteSummaryComponent implements OnInit {

  products:Product[]=[];
  favoriteItems:FavoriteItem[]=[]
  constructor(private activatedRoute:ActivatedRoute,
    private favoriteService:FavoriteService,
    private cartService:CartService,
    private toastrService:ToastrService,
    ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params){
        this.getCart();
      }
    })
  }
  getCart(){
    this.favoriteItems=this.favoriteService.list();
  }
  removeFromFavorite(product:Product){
    this.favoriteService.removeFavorite(product)
  }
  addToFavorite(product:Product){
    this.favoriteService.addToFavorite(product)
  }
}
