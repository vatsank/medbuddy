import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';
import { ShowTransactionHistoryComponent } from './show-transaction-history/show-transaction-history.component';
import { ShowCatalogComponent } from './show-catalog/show-catalog.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'content', component: ContentComponent},
  {path: 'catalog', component: ShowCatalogComponent},
  {path: 'history', component: ShowTransactionHistoryComponent},
  {path: 'appointment', component: ManageAppointmentComponent},
  {path: '**', redirectTo: 'login'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
