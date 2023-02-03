import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';

import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  
  {path:'admin',loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'**',component:ErrorComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  