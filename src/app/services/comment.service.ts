import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl="https://localhost:44364/api/"
  constructor(private httpClient:HttpClient) { }

  commentAdd(comment:Comment):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "productreviews/add",comment)
  }
}

