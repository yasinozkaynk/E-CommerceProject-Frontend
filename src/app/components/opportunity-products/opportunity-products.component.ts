import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-opportunity-products',
  templateUrl: './opportunity-products.component.html',
  styleUrls: ['./opportunity-products.component.css']
})
export class OpportunityProductsComponent implements OnInit {

  products: Product[] = []
  product: Product

  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getUnitsProduct()
    this.slides = this.chunk(this.cards, 2);
  }
  getUnitsProduct() {
    this.productService.getByUnitsPrice().subscribe(response => {
      this.products = response.data
    })
  }
  cards = [
    {
      img: 'https://media.istockphoto.com/photos/render-gold-text-50-percent-off-picture-id521230887',
      
    },
    {
      img: 'https://image.shutterstock.com/image-illustration/20-3d-rendering-golden-symbol-260nw-1047663559.jpg'

    },
    {
      img: 'https://t3.ftcdn.net/jpg/00/71/98/98/360_F_71989863_3mrai9n2aXS6yRHktyXq4RysZMU2QMOJ.jpg'
    },
    {
      img: 'https://us.123rf.com/450wm/yodiyim/yodiyim1410/yodiyim141000102/32874485-3d-render-texto-del-oro-el-35-por-ciento-de-descuento-sobre-fondo-blanco-con-la-reflexi%C3%B3n-.jpg?ver=6'
    },
  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }



}
