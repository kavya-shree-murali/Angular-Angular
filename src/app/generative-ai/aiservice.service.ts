import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class OpenAiApiService {

    constructor(private http: HttpClient) {
    }

    presentationId = `1W47G9K0IoZOWrFH_U9-Wj68CgrUvqWUF0h17uHNQ`
    private url = 'https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText';
    private API_KEY = `AIzaSyCnhMhPCjynkHcfTbQnWkq0utMnHYW2k58`
    private token = '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'
    private apiUrl = `https://api.openai.com/v1/chat/completions`; // Update with your Node.js server URL
    private ImageUrl = `https://api.openai.com/v1/images/generations`;
    private audioUrl = `https://api.openai.com/v1/audio/transcriptions`
    private googleUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${this.API_KEY}`
    private googleSlideUrl = `https://slides.googleapis.com/v1/presentations`;


    sendMessage(obj) {
        if (obj == 'message') {
            console.log('true')
        }
        return this.http.post<any>(`${this.apiUrl}`, obj);
    }

    sendImage(obj) {
        return this.http.post<any>(this.ImageUrl, obj);
    }

    sendAudio(file) {
        const formData = new FormData();
        formData.append("model", "whisper-1"),
        formData.append("file", file)
        return this.http.post<any>(this.audioUrl, formData)
    }

    googleAI(obj) {
        return this.http.post<any>(`${this.googleUrl}`, obj)
        // return this.http.post(this.url, { params: { key: this.API_KEY, obj } })
    }

    googleSlide(obj) {
        return this.http.post(`${this.googleSlideUrl}`, obj)
    }






}