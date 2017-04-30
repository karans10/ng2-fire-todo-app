import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AuthenticationService {

 //  private isSignedIn = false;
 public uid: string;
  public isSignedIn: EventEmitter<boolean> = new EventEmitter();
  constructor(private angularFire: AngularFire, private router: Router) {
    this.angularFire.auth.subscribe((auth) => {
      if(auth) {
        console.log('logged in');
        this.uid = auth.uid;
        this.isSignedIn.emit(true);
        this.router.navigate(['todo-list']);        
      }
      else {
        console.log('not logged in');
        this.isSignedIn.emit(false);
        this.router.navigate(['']);
      }
    });
   }

  public loginWithGoogle() {
    return this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  public logout() {
    return this.angularFire.auth.logout();
  }


}
