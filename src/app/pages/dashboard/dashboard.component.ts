import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { UserService } from 'src/app/services/user.service';
import { displayToast } from 'src/app/utils/alerts';
import { getSession } from 'src/app/utils/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: any = [];
  ownDevices: any = [];
  isAdmin: boolean = false;

  constructor(
    private deviceService: DeviceService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isAdmin = JSON.parse(getSession("user")!)?.type === "ADMIN"
    this.deviceService.getOrAddDevices(0, 0).subscribe(
      (data: any) => {
        this.devices = data?.result;
      },
      (_error) => {
        displayToast("ERROR", false);
      }
    );
    this.userService.getUsers(JSON.parse(getSession("user")!)?.id).subscribe(
      (data: any) => {
        this.ownDevices = data?.result?.devices;
      },
      (_error) => {
        displayToast("ERROR", false);
      }
    )
  }

  onLogout(): void {
    sessionStorage.clear();
    this.router.navigate(["signin"]);
  }

}
