import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NoRecordFoundComponent } from '../utility/no-record-found/no-record-found.component';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule
  ]
})
export class ApplicationRegModule { }
