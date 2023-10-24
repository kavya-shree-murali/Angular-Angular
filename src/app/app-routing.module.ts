import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { ComonComponent } from './comon/comon.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { ReceiveMessageComponent } from './receive-message/receive-message.component';
import { CspComponent } from './csp/csp.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PaymentComponent } from './payment/payment.component';
import { RxjsWorkoutsComponent } from './rxjs-workouts/rxjs-workouts.component';
import { GenerativeAiComponent } from './generative-ai/generative-ai.component';

const routes: Routes = [
  {path:'', component: StateManagementComponent},
  {path: 'csp', component: CspComponent},
  {path: 'broad', component: BroadcastComponent},
  {path: 'paytm', component:PaytmComponent},
  {path: 'pay', component:PaymentComponent},
  {path: 'rxjs', component:RxjsWorkoutsComponent},
  {path: 'ai', component:GenerativeAiComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
