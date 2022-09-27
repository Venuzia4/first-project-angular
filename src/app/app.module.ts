import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { HeroComponent } from './hero/hero.component';
import { MyFormComponent } from './my-form/my-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent,
    UserComponent,
    HeroComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
