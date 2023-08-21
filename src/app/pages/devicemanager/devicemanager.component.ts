import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { UserService } from 'src/app/services/user.service';
import { displayToast } from 'src/app/utils/alerts';

@Component({
  selector: 'app-devicemanager',
  templateUrl: './devicemanager.component.html',
  styleUrls: ['./devicemanager.component.css']
})
export class DevicemanagerComponent implements OnInit {
  userId: number = 0;
  deviceId: number = 0;

  users: any;
  devices: any;

  constructor(
    private userService: UserService,
    private deviceService: DeviceService,
  ) {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data?.result
    })
    this.deviceService.getDevices().subscribe((data: any) => {
      this.devices = data?.result
    })
  }

  ngOnInit(): void {
  }

  onSend(): void {
    if (this.userId && this.deviceId) {
      this.deviceService.getOrAddDevices(this.userId, this.deviceId).subscribe(
        _result => {
          displayToast("SUCCESS");
        },
        _error => {
          displayToast("ERROR", false);
        }
      );
    } else {
      displayToast("ERROR", false);
    }
  }

}
