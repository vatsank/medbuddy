import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ShowCatalogComponent } from './show-catalog/show-catalog.component';
import { MenuComponent } from './menu/menu.component';
import { FindServiceAreaComponent } from './find-service-area/find-service-area.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighLightDirective } from './high-light.directive';
import { ShowTransactionHistoryComponent } from './show-transaction-history/show-transaction-history.component';
import { FilterPipe } from './filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShowLocationComponent } from './show-location/show-location.component';
import { ManageAppointmentComponent } from './manage-appointment/manage-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TestimonyComponent,
    ShowCatalogComponent,
    MenuComponent,
    FindServiceAreaComponent,
    LoginComponent,
    LogoutComponent,
    HighLightDirective,
    ShowTransactionHistoryComponent,
    FilterPipe,
    ShowLocationComponent,
    ManageAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule, NgxPaginationModule, ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [ShowLocationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
