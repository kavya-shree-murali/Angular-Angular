import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CheckNull, MessageService } from '../services/message.service';
import { BehaviorSubject, Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';
import { OtpTimer } from './otp.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.css']
})
export class ReceiveMessageComponent implements OnInit {
  message: string
  value: any

  public initialCountdown = new BehaviorSubject<any>('');
  public reStarting = new BehaviorSubject<any>(null);
  countdown: any = 60;
  private countdownSubscription: Subscription;

  values: any;
  browserRefresh: boolean;
  continue: string;
  reload: boolean = false;
  constructor(
    private messageService: MessageService,private toastr: ToastrService,
    private router: Router,
    public timer: OtpTimer) {
    this.values = localStorage.getItem('Counter')
    this.startCountdown()
  }

  ngOnInit(): void {
    this.messageService.receiveMessag().subscribe((res) => {
      this.message = res
      this.toastr.success('Message Broadcast with subject')
    })
    this.sendOTP()
  }

  counter: any = sessionStorage.getItem('counter')
  sendOTP() {
    this.counter = (CheckNull(this.counter) && Number(this.counter) > 1) ? this.counter : 0.00;
    console.log(this.counter,'this is the ount');
    
    if (CheckNull(this.counter) && Number(this.counter) > 1) {
      this.timer.startTimer(this.counter)
    } 
  }

  resendOTP() {
    this.counter = 60
    this.timer.startTimer(this.counter)
  }

  @HostListener('window:load', ['$event'])
  onLoad() {   
      console.log('hit when the page loaded..........', )
  }

  startCountdown() {
    this.reload = false
    this.initialCountdown = this.initialCountdown;
    this.countdownSubscription = interval(1000).subscribe(() => {
      if (this.countdown > 0) {
        this.countdown--;
        this.value = String(this.countdown).length == 1 ? `00.0${this.countdown}` : `00.${this.countdown}`
        this.initialCountdown.next(this.value)
        this.values = localStorage.setItem('Store', this.countdown);

      }
    });
  }
}

