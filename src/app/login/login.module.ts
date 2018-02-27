import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
@NgModule({
  imports: [
    CommonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
