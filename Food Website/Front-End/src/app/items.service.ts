import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface item{
id:number
product_name:string;
product_price:number;
product_picture:File | null;
product_details:string;
}
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
private apiUrl="http://127.0.0.1:8000/api/products/"

  constructor(private http:HttpClient) { }
  getItems():Observable<item[]>{
    return this.http.get<item[]>(this.apiUrl);
  }
  addItem(formData: FormData):Observable<item>{
    return this.http.post<item>(this.apiUrl,formData)
  }
  getProductById(id: number): Observable<item> {
    return this.http.get<item>(`${this.apiUrl}/${id}/`);
  }
  
  orderProduct(productId: number, orderData: any) {
  return this.http.post(`http://127.0.0.1:8000/api/products/${productId}/order/`, orderData);
}

}
