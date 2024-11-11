import { Component } from '@angular/core';
import { AuthModule } from 'ds2u-lib';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  title: string = "Enter your email address and password to access admin panel";
  logoUrl: string = "assets/logotest.jpg";
  registerUrl: string = "/register";
  resetPasswordUrl: string = "/reset-password"

  constructor(){

  }

  login(dados: any){
  }


}
