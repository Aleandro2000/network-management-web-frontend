import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInInterface } from '../interface/signup.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  signInService(email: string, password: string){
    return this.http.post<SignInInterface>(`${environment}/user/sign_in`, {
      email,
      password,
    });
  }
}
