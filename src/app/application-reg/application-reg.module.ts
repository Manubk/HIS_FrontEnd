import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ApplicationRegModule { }
