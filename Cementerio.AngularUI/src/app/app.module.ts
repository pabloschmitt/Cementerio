import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// start: Angular/Material
import { MaterialModule } from './common/material.module';
// End: Angular Material
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { NgcFloatButtonModule } from 'ngc-float-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// start: aplications compornent
import { AppComponent } from './app.component';
// --> Start: Auth Components
import { LoginComponent } from './auth/login-component';

import { AuthService } from './auth/auth-service';

import { AuthGuard } from './auth/auth-guard';
// --> end: Auth Components
import { HeaderComponent } from './header/header.component';

import { AppToolbarService } from './app-toolbar/app-toolbar.service';

// End: aplications compornent

@NgModule({
  declarations: [
    AppComponent, LoginComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Start: Angular Material
    MaterialModule,
    // End: Angular Material
    FlexLayoutModule,
    NgcFloatButtonModule
    // Start: Applicatiosn Imports
    // End Applicatiosn Imports
  ],
  providers: [ AuthService , AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {}
