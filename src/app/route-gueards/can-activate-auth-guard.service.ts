import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class CanActivateAuthGuardService implements CanActivate{

private isSignedIn: boolean;
  constructor(private authentication: AuthenticationService) {
    this.authentication.isSignedIn.subscribe((isSignedIn) => {
        this.isSignedIn = isSignedIn;
    })
   }

  canActivate() {
    return this.isSignedIn;
  }

}
