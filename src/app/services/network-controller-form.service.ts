import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkControllerFormService {

  constructor(
    private http: HttpClient,
  ) { }

  sendNetworkAccess(username: string, password: string) {
    return this.http.post("http://localhost:58000/api/v1/ticket", {
      username,
      password,
    });
  }
}
