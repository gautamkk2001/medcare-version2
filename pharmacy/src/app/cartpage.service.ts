import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class CartpageService {

  orderPayment:boolean=false;

  url:any="http://localhost:3000/cart-data";
  constructor(private http:HttpClient) { }
  searchTiming(name: any, email:any): Observable <any>{
    return this.http.get<any>(this.url).pipe(
      map((data) => {
        return data.filter(
          (item:any) =>
            item.username === name && item.email=== email
        );
      })
    );
  }

  orderPlaced:any=[
    
  ]
}
