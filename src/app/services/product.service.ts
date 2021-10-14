import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ProductComment } from '../models/productComment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productId: number
  userId=this.authService.userId

  apiUrl = "https://localhost:44364/api/"
  constructor(private httpClient: HttpClient,public authService:AuthService) { }

  getAllProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  getProductsByCategoryId(categoryId: number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add", product)
  }
  update(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/update", product)
  }
  getProduct(productId: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + "products/getbyid?id=" + productId)
  }
  getByUnitsPrice(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbyunitsprice"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getAllComment(productId: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + "products/id?productId=" + productId)
  }

  getUserProductId(userId=this.userId): Observable<ListResponseModel<Product>> {
    return this.httpClient.get < ListResponseModel<Product>>(this.apiUrl + "products/userid?id=" + userId)
  }

}
