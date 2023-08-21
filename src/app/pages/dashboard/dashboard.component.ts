import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { displayToast } from 'src/app/utils/alerts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: any[] = [];

  constructor(
    private deviceService: DeviceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.deviceService.getOrAddDevices(0, 0).subscribe(
      (data: any) => {
        this.devices = data?.result;
      },
      (_error) => {
        displayToast("ERROR", false);
      }
    );
  }

  onLogout(): void {
    sessionStorage.clear();
    this.router.navigate(["signin"]);
  }

}
