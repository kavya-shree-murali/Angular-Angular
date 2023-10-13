import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export function checkNull(value){
  return value != '' && value != undefined && value!= null
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  makeHttpRequest() : Observable<any>{
   return this.http.get('https://dummyjson.com/products')
  }
}