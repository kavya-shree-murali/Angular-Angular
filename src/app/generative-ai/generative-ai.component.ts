import { Component } from '@angular/core';
import { OpenAiApiService } from './aiservice.service';

@Component({
  selector: 'app-generative-ai',
  templateUrl: './generative-ai.component.html',
  styleUrls: ['./generative-ai.component.css']
})
export class GenerativeAiComponent {
  userMessage!: string;
  assistantReply!: string;
  chatMessages: { role: string, content: string }[] = [];

  constructor(private openAiApiService: OpenAiApiService) { }
 
  sendMessage() {
    const userMessage = this.userMessage;
    let obj = {

      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content":userMessage }],
      "temperature": 0.7
  
   }

    this.openAiApiService.sendMessage(obj)
      .subscribe((response: any) => {
        console.log(response.choices[0].message.content)
        this.assistantReply = response.choices[0].message.content;
        this.chatMessages.push({ role: 'assistant', content: this.assistantReply });
        this.userMessage = '';
      });
  }


}
