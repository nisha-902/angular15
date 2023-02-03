import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { CustomStyleDirective } from './custom-style.directive';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './admin/login/login.component';
import { ListComponent } from './admin/list/list.component';
// import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ErrorComponent,
    CustomStyleDirective,
  
    LoginComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule ,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // AdminModule,
    ClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
