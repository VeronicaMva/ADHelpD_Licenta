import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakComponent } from './pages/break/break.component';
import { HomeComponent } from './pages/home/home.component';
import { OrganizeComponent } from './pages/organize/organize.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'organize', component: OrganizeComponent},
  {path: 'break', component: BreakComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
