import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getSession } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class NetworkServicesGuardGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (getSession("jwt") && getSession("serviceTicket")) {
      return true;
    }
    if (!getSession("setviceTicket")) {
      return this.router.navigate(["network-controller"]);
    }
    return this.router.navigate(["signin"]);
  }

}
