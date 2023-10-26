import { Component } from '@angular/core';
import { OpenAiApiService } from './aiservice.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import RecordRTC from 'recordrtc';

@Component({
  selector: 'app-generative-ai',
  templateUrl: './generative-ai.component.html',
  styleUrls: ['./generative-ai.component.css']
})
export class GenerativeAiComponent {
  userMessage!: string;
  UploadImage: any
  assistantReply!: string;
  chatMessages: { role: string, content: string, reply: string, image: any }[] = [];
  user: { image: any }[] = [];
  imageData: any[] = [];

  private stream: MediaStream;
  private recorder: RecordRTC;
  recording: boolean = false;
  audioBlobUrl: SafeUrl;
  value: any;

  constructor(private openAiApiService: OpenAiApiService, private sanitizer: DomSanitizer, ) { }

  

  startRecording() {
    this.recording = true;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.stream = stream;
        this.recorder = new RecordRTC(stream, {
          type: 'audio'
        });
        this.recorder.startRecording();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }

  stopRecording() {
    this.recording = false;
    this.recorder.stopRecording(() => {
      this.stream.getTracks().forEach((track) => track.stop());
      this.audioBlobUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(this.recorder.getBlob())

      );
      console.log(this.recorder)
    });
  }

  sendMessage() {
    const userMessage = this.userMessage;
    let obj = {

      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": userMessage }],
      "temperature": 0.7

    }

    this.openAiApiService.sendMessage(obj)
      .subscribe((response: any) => {
        console.log(response.choices[0].message.content)
        this.assistantReply = response.choices[0].message.content;
        this.chatMessages.push({ role: 'assistant',  reply: userMessage, content: this.assistantReply, image: this.imageData});
        console.log(this.chatMessages)
        // this.user.push({ role: "user", content: this.userMessage })
        this.userMessage = '';
      });
  }

  sendImage() {
    const Image = this.userMessage;
    let obj = {
      "prompt": this.userMessage,
      "n": 1,
      "size": "1024x1024"
    }

    this.openAiApiService.sendImage(obj)
      .subscribe((response: any) => {
        console.log(response?.data)
        this.imageData.push({you: Image, bot: response?.data[0].url})
        this.userMessage = ''

      });
  }


  file: File
  onFileSelected(event: any) {
    // const audioUrl = `file:///D:/kavya/angular-project-workouts/audio.mp3`
    this.file = event.target.files[0];
    console.log(this.file)
  }

  getAudioURL(): string | null {
    if (this.file) {
      return URL.createObjectURL(this.file);
    }
    return null;
  }
  
  text: any[] = []
  sendAudio() {
    const userMessage = this.userMessage;
    this.openAiApiService.sendAudio(this.file).subscribe((res) => {
      console.log(res)
      this.text.push({you : this.userMessage, value: res?.text})
     })
  }


  orderArray: any[] = []
  sendGoogleAI() {
    const message = this.userMessage;

    let obj = {
      "prompt": {text: message}
    }

    this.openAiApiService.googleAI(obj).subscribe((res) => {
      console.log(res.candidates[0].output)
      this.value = res.candidates[0]
      this.orderArray.push({value : this.value, you: this.userMessage})
      this.userMessage = ''

    })
  }


}
