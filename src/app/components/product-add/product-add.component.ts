import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private productService:ProductService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
      this.productAddForm = this.formBuilder.group({
        productName:["",[Validators.required, Validators.minLength(2)]],
        categoryId:["",Validators.required],
        unitPrice:["",[Validators.required,Validators.min(0)]],
        unitsInStock:["",[Validators.required,Validators.min(0)]]
      })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      })      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
      
  }

}