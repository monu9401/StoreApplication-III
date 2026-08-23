import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ProductDto } from "../ProductDto";
import { environment } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
  })
  export class AddProductService {
    private apiUrl = environment.apiUrl;
    
    constructor(private http: HttpClient) {}

    addProduct(product:ProductDto): Observable<ProductDto> {
        return this.http.post<ProductDto>(this.apiUrl,product);
    }
  }