import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-comon',
  templateUrl: './comon.component.html',
  styleUrls: ['./comon.component.css']
})
export class ComonComponent implements OnInit{
 
  constructor(private messageService : MessageService){
  }

  ngOnInit(): void {
  }

  value: string;
  send(value){
    this.messageService.sendMessage(value);
    this.value = '';
    console.log(value)
  }
}
