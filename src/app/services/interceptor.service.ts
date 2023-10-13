
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class CustInterceptor implements HttpInterceptor {
    constructor(private tokenExtractor: HttpXsrfTokenExtractor,  private cookieService: CookieService ) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cookie = this.cookieService.get('CSRF_TOKEN')
        const modifiedRequest = req.clone({
            headers: req.headers.set('token', cookie) 
          });
      
          return next.handle(modifiedRequest);
    }
}