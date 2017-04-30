import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  private login() {
    this.authentication.loginWithGoogle().then((userData) => {
      if(userData) {
        // this.router.navigate(['todo-list']);
      }
    })
  }

}
