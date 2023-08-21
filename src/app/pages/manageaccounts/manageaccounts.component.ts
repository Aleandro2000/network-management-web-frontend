import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { displayToast } from 'src/app/utils/alerts';
import { messages } from 'src/app/utils/messages';
import { emailRegex, passwordRegex } from 'src/app/utils/regex';

@Component({
  selector: 'app-manageaccounts',
  templateUrl: './manageaccounts.component.html',
  styleUrls: ['./manageaccounts.component.css']
})
export class ManageaccountsComponent implements OnInit {
  manageAccountsForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.pattern(passwordRegex)]),
  })
  messages = messages;

  get email() {
    return this.manageAccountsForm.get("email");
  }

  get password() {
    return this.manageAccountsForm.get("password");
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSignup(): void {
    if (!this.manageAccountsForm.invalid) {
      this.authService.signUpService(this.manageAccountsForm.get("email")?.value, this.manageAccountsForm.get("password")?.value).subscribe(
        (response: any) => {
          if (response?.data) {
            displayToast(messages.SIGN_UP_SUCCESSFULLY);
            this.router.navigate(["signin"]);
          } else {
            displayToast(messages.SIGN_UP_FAILED_EXISTS, false);
          }
        },
        _error => {
          alert(JSON.stringify(_error.message))
          displayToast(messages.SIGN_UP_FAILED, false);
        }
      );
    } else {
      displayToast(messages.SIGN_UP_FAILED, false);
    }
  }

}
