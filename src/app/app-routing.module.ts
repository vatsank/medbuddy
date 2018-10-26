import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';
import { ShowTransactionHistoryComponent } from './show-transaction-history/show-transaction-history.component';
import { ShowCatalogComponent } from './show-catalog/show-catalog.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { UniversalGuardGuard } from './universal-guard.guard';

const routes: Routes = [
  {path: '',redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'content', component: ContentComponent , canActivate: [UniversalGuardGuard]},
  {path: 'catalog', component: ShowCatalogComponent , canActivate: [UniversalGuardGuard]},
  {path: 'catalog/:code', component: ShowCatalogComponent , canActivate: [UniversalGuardGuard]},
  {path: 'history', component: ShowTransactionHistoryComponent ,canDeactivate :[UniversalGuardGuard] },
  {path: 'appointment', component: ManageAppointmentComponent,canDeactivate: [UniversalGuardGuard]},
  {path: '**', redirectTo: 'login'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
