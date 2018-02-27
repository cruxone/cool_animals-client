import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CatsModule, CatsParentComponent } from './cats';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { LoginComponent } from './login/login/login.component';
import { CreateUserComponent } from './create-user/create-user/create-user.component';
import { CreateUserModule } from 'app/create-user';

const router: Routes = [
  {
      path: "login", component: LoginComponent
  },
  {
      path: "new-user", component: CreateUserComponent
  },
  {
    path: "cats", component: CatsParentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(router, {enableTracing: false}),
    BrowserModule,
    FormsModule,
    HttpModule,
    CatsModule,
    CreateUserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
