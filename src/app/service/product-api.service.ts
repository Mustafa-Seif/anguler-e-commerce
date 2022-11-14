import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProData } from '../interface/pro-data';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  constructor(private http:HttpClient) { }
  

  getProductList(){
    return this.http.get<ProData[]>("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
  }
  getProductDetails(id:string){
    return this.http.get<ProData>(`https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${id}`);
  }
}