import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email: any;
  password: any;
  serverError: string;

  constructor(private _app:AppService) { }

  ngOnInit() {
  }
  login() {
    this._app.auth.login(this.email && this.password)
      .subscribe(
        data => {
         },
        err => { console.log(err); this.serverError = 'Invalid credentials.!'; }
      );
      console.log(this.email,this.password);
      
  }

}
