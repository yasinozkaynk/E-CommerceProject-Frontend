import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Register } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserCategory } from '../models/user-category';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44364/api/auth/"

  constructor(private httpClient:HttpClient) { }

  userUpdate(register :Register){
   return this.httpClient.post<SingleResponseModel<Register>>(this.apiUrl+ "update",register)
  }

}
