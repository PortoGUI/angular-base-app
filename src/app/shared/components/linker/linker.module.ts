import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkerComponent } from './linker.component';



@NgModule({
  declarations: [
    LinkerComponent
  ],
  exports: [
    LinkerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LinkerModule { }
