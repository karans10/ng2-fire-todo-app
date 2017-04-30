import { Component, OnInit   } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public isLoggedIn: boolean;

  constructor(private authentication: AuthenticationService) { }

ngOnInit() {
this.authentication.isSignedIn.subscribe((isSignedIn) => {
    this.isLoggedIn = isSignedIn;
  });
}

public logout() {
  this.authentication.logout();
}
  
  
}
