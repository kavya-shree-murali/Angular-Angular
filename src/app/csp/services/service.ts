import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
    constructor(private http : HttpClient){
    }

    getToken(): Observable<any>{
        return this.http.get(`http://localhost:3000/csrfEndpoint`)
    }
}