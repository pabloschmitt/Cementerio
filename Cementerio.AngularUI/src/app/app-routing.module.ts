import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  /*
   { path: '', component: HomeComponent , canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: '**', redirectTo: ''}
   */
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
