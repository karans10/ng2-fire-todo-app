import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class TodosDataService {

  constructor(private angularFire: AngularFire, private authentication: AuthenticationService) {}

  public getTodos() {
    let uid = this.authentication.uid;
    return this.angularFire.database.list(`/todos/${uid}`);
  }

}
