import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { displayToast } from 'src/app/utils/alerts';
import { messages } from 'src/app/utils/messages';
import { emailRegex } from 'src/app/utils/regex';
import { setSession } from 'src/app/utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(emailRegex)]),
    password: new FormControl("", [Validators.required]),
  });
  messages = messages;

  get email() {
    return this.signinForm.get("email");
  }
  
  get password() {
    return this.signinForm.get("password");
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSignin(): void {
    if (!this.signinForm.invalid) {
      this.authService.signInService(this.signinForm.get("email")?.value, this.signinForm.get("password")?.value).subscribe(
        response => {
          displayToast(messages.SIGN_IN_SUCCESSFULLY);
          setSession("jwt", response?.jwt);
          this.router.navigate(["dashboard"]);
        },
        _error => {
          displayToast(messages.SIGN_IN_FAILED, false);
        }
      );
    } else {
      displayToast(messages.SIGN_IN_FAILED, false);
    }
  }
}
