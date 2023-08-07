import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
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
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
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
