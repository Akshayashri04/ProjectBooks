import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authpage } from '../services/auth';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone:true,
imports :[FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    // simple check (you can connect API later)
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid Credentials');
    }
  }
}
