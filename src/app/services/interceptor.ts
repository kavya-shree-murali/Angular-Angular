import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    constructor(private tokenExtractor: HttpXsrfTokenExtractor,) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)CSRF_TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1")
        console.log(cookie, 'cookie');
        const cookieheaderName = 'XSRF';
        if (cookie !== null && !req.headers.has(cookieheaderName)) {
            req = req.clone({ headers: req.headers.set(cookieheaderName, cookie) });
        }
        return next.handle(req); 
    }
}