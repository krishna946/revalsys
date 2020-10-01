import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }
  URL='../assets/sampleData.json';
  getProducts() {
    return this.http.get(this.URL)
  }
}
