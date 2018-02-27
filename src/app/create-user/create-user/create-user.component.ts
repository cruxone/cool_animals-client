import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CreateUserService } from '../services/create-user.service';
import { User } from '../models/user';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user = new User()
  submit = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  genFormControl = new FormControl('',[
    Validators.required
  ])
  constructor(private createUserService: CreateUserService) { }

  ngOnInit() {
  }
  onSubmit(user) { 
    this.submit = true;
    this.createUserService.newUser(user).subscribe()
  }
  matcher = new MyErrorStateMatcher();
}
