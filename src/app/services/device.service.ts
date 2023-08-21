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

  getOrAddDevices(userId: number, deviceId: number) {
    return this.http.post(`${environment.publicApiUrl}/user/add_or_get_device`, {
      userId,
      deviceId,
    });
  }
}
