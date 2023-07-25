import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailRegex, passwordRegex } from 'src/app/utils/regex';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl("", Validators.pattern(emailRegex)),
    password: new FormControl("", Validators.pattern(passwordRegex)),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSignup(): void {

  }

}
