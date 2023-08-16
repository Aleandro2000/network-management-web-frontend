import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private http: HttpClient,
  ) { }

  getDevices() {
    return this.http.get(`${environment.publicApiUrl}/devices/show`);
  }
}
