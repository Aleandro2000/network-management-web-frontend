import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInInterface } from '../interface/signup.interface';
import { environment } from 'src/environments/environment';
import { SignUpInterface } from '../interface/signin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  signInService(email: string, password: string){
    return this.http.post<SignInInterface>(`${environment.publicApiUrl}/user/sign_in`, {
      email,
      password,
    });
  }

  signUpService(email: string, password: string) {
    return this.http.post<SignUpInterface>(`${environment.publicApiUrl}/user/sign_up`, {
      email,
      password,
    });
  }
}
