import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowitworksComponent } from './info/howitworks/howitworks.component';
import { LatestdealsComponent } from './info/latestdeals/latestdeals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info/howitworks', component: HowitworksComponent },
  { path: 'info/latestdeals', component: LatestdealsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
