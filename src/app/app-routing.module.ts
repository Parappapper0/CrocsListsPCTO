import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ElementoComponent } from './components/elemento/elemento.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';

const routes: Routes = [
  /*
  { path: '', component: NavBarComponent ?ElementoComponent},
  { path: 'nameList', component: ElementoComponent},
  { path: 'Setting', component: SettingsPageComponent}, modifico io*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
