import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { ComonComponent } from './comon/comon.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { ReceiveMessageComponent } from './receive-message/receive-message.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path: 'state', component: StateManagementComponent},
  {path: 'broad', component: BroadcastComponent},
  // {path: 'load', component:ReceiveMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
