import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { displayToast } from 'src/app/utils/alerts';
import { messages } from 'src/app/utils/messages';
import { emailRegex, passwordRegex } from 'src/app/utils/regex';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.pattern(passwordRegex)]),
  })
  messages = messages;

  get email() {
    return this.signupForm.get("email");
  }

  get password() {
    return this.signupForm.get("password");
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSignup(): void {
    if (!this.signupForm.invalid) {
      this.authService.signUpService(this.signupForm.get("email")?.value, this.signupForm.get("password")?.value).subscribe(
        (response: any) => {
          if (response?.data) {
            displayToast(messages.SIGN_UP_SUCCESSFULLY);
            this.router.navigate(["signin"]);
          } else {
            displayToast(messages.SIGN_UP_FAILED_EXISTS, false);
          }
        },
        _error => {
          displayToast(messages.SIGN_UP_FAILED, false);
        }
      );
    } else {
      displayToast(messages.SIGN_UP_FAILED, false);
    }
  }

}
