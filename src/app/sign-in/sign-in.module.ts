import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from '../sign-in/sign-in.routing';
import { SignInComponent } from '../sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
