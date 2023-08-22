import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(id?: any) {
    return !id ? this.http.get(`${environment.publicApiUrl}/user/show`) : this.http.get(`${environment.publicApiUrl}/user/get/${id}`);
  }
}
