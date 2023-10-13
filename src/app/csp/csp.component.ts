import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TokenService } from './services/service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-csp',
  templateUrl: './csp.component.html',
  styleUrls: ['./csp.component.css']
})
export class CspComponent {

  unsafeURL : string;
  safeURL : any;
  imageURL = 'https://www.pinterest.com/pin/175499716717618322/'

  unsafeVideoURL : string;
  safeVideoURL : SafeResourceUrl;
  videoUrl: string;
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private service: TokenService, private cookieService: CookieService){
    this.videoUrl = '2dAklD-kb28';

    this.unsafeURL = 'javascript:alert("Hi there")';
    this.safeURL = this.sanitizer.bypassSecurityTrustUrl(this.unsafeURL);

    this.unsafeVideoURL = 'https://www.youtube.com/embed/' + this.videoUrl
    this.safeVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeVideoURL)
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageURL)
  }
  ngOnInit(): void {
    this.getToken()
  }

  getToken(){
    this.service.getToken().subscribe((resp) => {
      const token = resp.token
      console.log(token)
      this.cookieService.set('CSRF_TOKEN', token)
    })
  }

}
