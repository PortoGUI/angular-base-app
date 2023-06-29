import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';



@NgModule({
  declarations: [
    CheckBoxComponent
  ],
  exports: [
    CheckBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckBoxModule { }
