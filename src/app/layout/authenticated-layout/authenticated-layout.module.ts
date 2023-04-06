import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticatedRoutingModule} from "./authenticated-routing.module";
import {AuthenticatedLayoutComponent} from "./authenticated-layout.component";


@NgModule({
  declarations: [AuthenticatedLayoutComponent],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule
  ]
})
export class AuthenticatedLayoutModule {
}
