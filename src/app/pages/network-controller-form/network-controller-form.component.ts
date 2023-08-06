import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkControllerFormService } from 'src/app/services/network-controller-form.service';
import { setSession } from 'src/app/utils/utils';

@Component({
  selector: 'app-network-controller-form',
  templateUrl: './network-controller-form.component.html',
  styleUrls: ['./network-controller-form.component.css']
})
export class NetworkControllerFormComponent implements OnInit {
  networkForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(
    private networkService: NetworkControllerFormService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSend(): void {
    this.networkService.sendNetworkAccess(this.networkForm.get("username")?.value, this.networkForm.get("password")?.value).subscribe(
      (result: any) => {
        setSession("serviceTicket", result?.response?.serviceTicket);
        this.router.navigate(["dashboard"]);
      }
    );
  }

}
