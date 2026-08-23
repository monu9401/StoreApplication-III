import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ProductDto } from "../ProductDto";
import { environment } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
  })
  export class UpdateProductService {
    private apiUrl = environment.apiUrl;
    
    constructor(private http: HttpClient) {}

    updateProduct(id:number,product:ProductDto): Observable<ProductDto> {
        return this.http.put<ProductDto>(this.apiUrl+"/"+id,product);
    }
  }