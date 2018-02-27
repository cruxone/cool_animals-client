import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserService } from './services/create-user.service';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CreateUserService],
  declarations: [CreateUserComponent],
  exports: [CreateUserComponent]
})
export class CreateUserModule { }
