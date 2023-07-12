import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminModule } from './admin/admin.module';
import { ApplicationRegModule } from './application-reg/application-reg.module';
import { DataCollectionModule } from './data-collection/data-collection.module';
import { EligibilityDeterminationModule } from './eligibility-determination/eligibility-determination.module';
import { BenefitIssuanceModule } from './benefit-issuance/benefit-issuance.module';
import { ReportModule } from './report/report.module';
import { ContactusComponent } from './contactus/contactus.component';
import { UtilityModule } from './utility/utility.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SidebarComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    ApplicationRegModule,
    DataCollectionModule,
    EligibilityDeterminationModule,
    ReactiveFormsModule,
    BenefitIssuanceModule,
    ReportModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
