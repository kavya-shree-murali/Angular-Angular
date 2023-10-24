import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";

@Injectable()
export class CustomInterceptor1 implements HttpInterceptor {
    constructor(private tokenExtractor: HttpXsrfTokenExtractor ) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let clone: any = ''

        if (request.url.includes('https://api.openai.com/v1/chat/completions')) {
          const newHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${environment.gpt_api_key}`,
            "OpenAI-Organization": environment.organization_id
          });
    
          let body: any = request.body
          let data = {
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "user", "content": body.message }],
            "temperature": 0.7
          }
          clone = request.clone({ headers: newHeaders})
        }
    
        return next.handle(clone ?? request);

       
    }

    
}