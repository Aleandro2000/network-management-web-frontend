import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { messages } from 'src/app/utils/messages';
import { emailRegex } from 'src/app/utils/regex';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl("", Validators.pattern(emailRegex)),
    password: new FormControl("", Validators.required),
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
  ) {
  }

  ngOnInit(): void {
  }

  onSignin(): void {
    if (!this.signinForm.invalid) {
      this.authService.signInService(this.signinForm.get("email")?.value, this.signinForm.get("password")?.value).subscribe(
        data => {
          
        }
      );
    }
  }
}
