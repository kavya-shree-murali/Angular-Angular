import { Component } from '@angular/core';
import { ApiService } from './services';

@Component({
  selector: 'app-paytm',
  templateUrl: './paytm.component.html',
  styleUrls: ['./paytm.component.css']
})
export class PaytmComponent {
  data: any;
  constructor(private service: ApiService) {
  }

  ngOnInit() {
    this.service.makeHttpRequest().subscribe((res) => {
      this.data = res.products
      console.log(this.data)
    })

  }

  quantity: number = 1;

  increment(id) {
    let value = this.data.filter((res) => 
      res.id == id
    )
    console.log(value, 'val')
    if (value) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
