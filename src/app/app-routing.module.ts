import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ElementoComponent } from './components/elemento/elemento.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { ListSelectionPageComponent } from './components/list-selection-page/list-selection-page.component';
import { PathLocationStrategy } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: 'home', component: ListSelectionPageComponent},
  { path: 'name-list', component: ElementoComponent},
  { path: 'setting', component: SettingsPageComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'login-page', component: LoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

