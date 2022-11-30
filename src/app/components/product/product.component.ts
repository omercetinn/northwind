import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http' //backend data ulaşır
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:Product[]= [];
  apiUrl="https://localhost:7211/api/products/getall"
  
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void{
    this.getProducts();

  }
  
  getProducts(){
  this.httpClient
  .get<ProductResponseModel>(this.apiUrl)
  .subscribe((response)=>{
    this.products = response.data
  });
  }

}
