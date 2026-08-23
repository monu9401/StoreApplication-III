import { Component } from '@angular/core';
import { ProductDto } from '../ProductDto';
import { AddProductService } from './add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private addProductService:AddProductService,private router:Router){}

  product: ProductDto = new ProductDto();

  addNewProduct(){
    this.addProductService.addProduct(this.product).subscribe({
      next: (data: ProductDto)=>{},
      error: (error) => {
        console.error('Error inserting product:', error);
      }
    });
    setTimeout(()=>this.router.navigate(['']),100);
  }
}
