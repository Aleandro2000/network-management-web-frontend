import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NetworkServicesGuardGuard } from './guards/network-services-guard.guard';
import { NetworkControllerFormComponent } from './pages/network-controller-form/network-controller-form.component';
import { PublicGuardGuard } from './guards/public-guard.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/signin",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: SigninComponent,
    canActivate: [PublicGuardGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [PublicGuardGuard],
  },
  {
    path: "network-controller",
    component: NetworkControllerFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [NetworkServicesGuardGuard],
  },
  {
    path: "**",
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
