import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { GetProductComponent } from './get-product/get-product.component';

const routes: Routes = [
  {
    path:'',
    component: GetProductComponent
  },
  {
    path:'add-product',
    component: AddProductComponent
  },
  {
    path:'update-product/:id/:name/:description/:price',
    component: UpdateProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
