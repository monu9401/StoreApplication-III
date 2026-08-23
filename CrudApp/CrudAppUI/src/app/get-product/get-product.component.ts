import { Component } from '@angular/core';
import { GetProductService } from './get-product.service';
import { Router } from '@angular/router';
import { ProductDto } from '../ProductDto';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent {

  constructor(private getProductService:GetProductService, private router:Router){}

  products:ProductDto[] = [];

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
    this.getProductService.getProducts().subscribe({
      next: (data: ProductDto[]) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error retrieving products:', error);
      }
    });
  }

  addNewProduct(){
    this.router.navigate(['/add-product']);
  }

  updateExistingProduct(id:number,name:string,description:string,price:number){
    this.router.navigate(['/update-product',id,name,description,price]);
  }

  deleteProduct(id:number){
    this.getProductService.deleteProduct(id).subscribe({
      next: () => {
        this.getAllProducts();
      },
      error: (error) => {
        console.error('Error deleting product:', error);
      }
    });
  }

}
