import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoRecordFoundComponent } from './no-record-found/no-record-found.component';
import { PageUnderConstructionComponent } from './page-under-construction/page-under-construction.component';



@NgModule({
  declarations: [
    NoRecordFoundComponent,
    PageUnderConstructionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NoRecordFoundComponent,
    PageUnderConstructionComponent
  ]
})
export class UtilityModule { }
