import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionInfoComponent } from './components/session-info/session-info.component';
import { AuthenticationRoutingModule } from "./authentication-routing.module";


@NgModule({
  declarations: [
    SessionInfoComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
  ]
})
export class AuthenticationModule { }
