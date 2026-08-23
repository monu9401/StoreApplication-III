import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProductService } from './update-product.service';
import { ProductDto } from '../ProductDto';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  constructor(private route: ActivatedRoute,private updateProductService:UpdateProductService,private router:Router){}

  product:ProductDto=new ProductDto();

  id:number=0;
  name:string="";
  description:string="";
  price:number=0;

  ngOnInit(){
    this.product.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product.name = String(this.route.snapshot.paramMap.get('name'));
    this.product.description = String(this.route.snapshot.paramMap.get('description'));
    this.product.price = Number(this.route.snapshot.paramMap.get('price'));
  }
  updateNewProduct(){
    this.updateProductService.updateProduct(this.id,this.product).subscribe({
      next: (data: ProductDto)=>{},
      error: (error) => {
        console.error('Error updating product:', error);
      }
    });
    setTimeout(()=>this.router.navigate(['']),100);
  }
}
