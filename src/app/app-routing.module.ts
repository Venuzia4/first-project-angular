import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserComponent } from "./user/user.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MenuComponent } from './menu/menu.component';

const routes:Routes=[
  {path:"signup",component:SignUpComponent},
  {path:"user",component:UserComponent},
  {path:"",component:UserProfileComponent},
  {path:"menu",component:MenuComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
