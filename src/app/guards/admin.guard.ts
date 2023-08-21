import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getSession } from '../utils/utils';
import { displayToast } from '../utils/alerts';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = JSON.parse(getSession("user")!);
    if (user?.type === "ADMIN") {
      return true;
    }
    displayToast("ADMIN PERMISIONS REQUIRED", false);
    return this.router.navigate(['/dashboard']);
  }

}
