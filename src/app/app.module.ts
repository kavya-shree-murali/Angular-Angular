import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { StateManagementComponent } from './state-management/state-management.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { ComonComponent } from './comon/comon.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { ReceiveMessageComponent } from './receive-message/receive-message.component';
import { CspComponent } from './csp/csp.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule, HttpXsrfTokenExtractor } from '@angular/common/http';
import { CustomInterceptor } from './services/interceptor';
import { CustInterceptor } from './services/interceptor.service';
import { PaytmComponent } from './paytm/paytm.component';
import { PaymentComponent } from './payment/payment.component';
import { RxjsWorkoutsComponent } from './rxjs-workouts/rxjs-workouts.component';
import { GenerativeAiComponent } from './generative-ai/generative-ai.component';
import { CustomInterceptor1 } from './generative-ai/interceptors';


@NgModule({
  declarations: [
    AppComponent,
    StateManagementComponent,
    ComonComponent,
    BroadcastComponent,
    ReceiveMessageComponent,
    CspComponent,
    PaytmComponent,
    PaymentComponent,
    RxjsWorkoutsComponent,
    GenerativeAiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    DragDropModule,
    MatInputModule,
    MatCardModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'Xsrf-Cookie',
      headerName: 'XSRF-TOKEN'
    })

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor1, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CustInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
