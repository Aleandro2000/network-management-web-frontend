import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { PublicGuard } from './guards/public.guard';
import { ManageaccountsComponent } from './pages/manageaccounts/manageaccounts.component';
import { AdminGuard } from './guards/admin.guard';
import { DevicemanagerComponent } from './pages/devicemanager/devicemanager.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/signin",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: SigninComponent,
    canActivate: [PublicGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [PublicGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "manageaccounts",
    component: ManageaccountsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "devicemanager",
    component: DevicemanagerComponent,
    canActivate: [AdminGuard],
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
