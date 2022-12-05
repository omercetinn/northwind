import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories:Category[]=[];
  
  currentCategory:Category;
  //={categoryId:0,categoryName:""}
  dataLoaded = false;
  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void{
    this.getCategories();

  }
  
  getCategories(){
 this.categoryService.getCategories().subscribe(response=>{this.categories=response.data
  this.dataLoaded =true;
})
}
setCurrentCategory(category:Category){
  this.currentCategory=category;
}

getCurrentCategoryClass(category:Category){
  if(category==this.currentCategory){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
}
}
