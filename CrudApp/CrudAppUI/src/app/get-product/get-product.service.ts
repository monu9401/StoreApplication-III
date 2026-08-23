import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ProductDto } from "../ProductDto";
import { environment } from "src/environments/environments";

@Injectable({
    providedIn: 'root'
  })
  export class GetProductService {
    private apiUrl = environment.apiUrl;
    
    constructor(private http: HttpClient) {}

    getProducts(): Observable<ProductDto[]> {
        return this.http.get<ProductDto[]>(this.apiUrl);
    }

    deleteProduct(id:number){
        return this.http.delete(this.apiUrl+"/"+id);
    }
  }