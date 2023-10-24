import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class OpenAiApiService {

    constructor(private http: HttpClient) {

    }

    private token = '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'
    private apiUrl = `https://api.openai.com/v1/chat/completions`; // Update with your Node.js server URL


     sendMessage(obj) {
        return this.http.post<any>(`${this.apiUrl}`, obj);
    }

  


}