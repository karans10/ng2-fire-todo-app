import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './config/firebase-config'

import { AuthenticationService } from './services/authentication.service';
import { TodosDataService } from './services/todos-data.service';
import { CanActivateAuthGuardService } from './route-gueards/can-activate-auth-guard.service';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: 'todo-list', component: ListComponent, canActivate: [CanActivateAuthGuardService]},
  {path: '', redirectTo:'/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, CanActivateAuthGuardService, TodosDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
