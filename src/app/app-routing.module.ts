import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ElementoComponent } from './components/elemento/elemento.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { ListSelectionPageComponent } from './components/list-selection-page/list-selection-page.component';
import { ListViewPageComponent } from './components/list-view-page/list-view-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: 'home', component: ListSelectionPageComponent},
  { path: 'view-list', component: ListViewPageComponent},
  { path: 'setting', component: SettingsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

