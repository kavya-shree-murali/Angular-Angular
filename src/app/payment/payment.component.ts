import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {



  constructor(private toastr: ToastrService,) { }

  ngOnInit() {
    this.loadPaytmScript();
  }

  // initPaytmCheckout(): void {
  //   // Initialize Paytm Checkout
  //   // (window as any).PaytmCheckout.init(this.config);

  //   (window as any).Paytm.CheckoutJS.init(this.config).then(function onSuccess() {
  //     // after successfully updating configuration, invoke JS Checkout
  //     (window as any).Paytm.CheckoutJS.invoke();
  //   }).catch(function onError(error) {
  //     console.log("error => ", error);
  //     this.toastr.error(`Error while payout`)
  //   });
  // }

  // invokePaytmCheckout(): void {
  //   // Invoke Paytm Checkout
  //   (window as any).Paytm.CheckoutJS.invoke();
  // }


  loadPaytmScript() {
    const script = document.createElement('script');
    script.src = 'https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/PYTMDM29354165830326.js';
    script.onload = () => {
      this.initPaytmCheckout();
    };
    document.head.appendChild(script);
  }

  initPaytmCheckout() {
    var merchantconfig = {
      //   "root": "#checkout-hook",
      flow: 'DEFAULT',
      data: {
        orderId: "integration_20230110145736"/* update order id */,
        token: "ad1ea48a-afd6-43bc-86dc-67ba34545600" /* update token value */,
        tokenType: 'TXN_TOKEN',
        amount: 1,
      },
      merchant: {
        mid: 'PYTMDM29354165830326',
        name: 'Kavya',
        redirect: false,
        hidePaytmBranding: true,
        logo: '',
      },
      style: {
        bodyBackgroundColor: "#fafafb",
        bodyColor: "",
        themeBackgroundColor: "#dfa231",
        themeColor: "#ffffff",
        headerBackgroundColor: "#0652aa",
        headerColor: "#ffffff",
        errorColor: "#fc4558",
        successColor: "#257c07",
        card: {
          padding: "",
          backgroundColor: ""
        },
        payMode: {
          labels: {},
          filter: {
            exclude: ["BALANCE", "PPBL", "PDC", "EMI"]
          },
          order: ["UPI", "NB", "CARD"]
        },
      },

      handler: {
        notifyMerchant: function (eventName: string, eventData: any) {
          // Handle notifications from Paytm
          console.log(eventName, eventData);
        },
      },
    };

    if ((window as any).Paytm && (window as any).Paytm.CheckoutJS) {
      (window as any).Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
        // initialze configuration using init method
        (window as any).Paytm.CheckoutJS.init(merchantconfig).then(function onSuccess() {
          // after successfully updating configuration, invoke JS Checkout
          (window as any).Paytm.CheckoutJS.invoke();
        }).catch(function onError(error) {
          console.log("error => ", error);
        });
      });
    }

  }

  invokePaytmCheckout(): void {
    if ((window as any).Paytm.CheckoutJS) {
      (window as any).Paytm.CheckoutJS.invoke();
    } else {
      console.error('PaytmCheckout not available');
    }
  }
}

