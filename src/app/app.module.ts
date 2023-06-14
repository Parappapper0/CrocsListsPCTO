import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementoComponent } from './components/elemento/elemento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './module/material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { ListSelectionPageComponent } from './components/list-selection-page/list-selection-page.component';
import { ListViewPageComponent } from './components/list-view-page/list-view-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogInRegisterComponent } from './components/log-in-register/log-in-register.component';
import { ListManagerService } from './services/list-manager.service';


@NgModule({
    declarations: [
      AppComponent,
      ElementoComponent,
      ElementoComponent,
      NavBarComponent,
      ListCardComponent,
      ListSelectionPageComponent,
      ListViewPageComponent,
      SettingsPageComponent,
      SignInComponent,
      LoginPageComponent,
      LogInRegisterComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
