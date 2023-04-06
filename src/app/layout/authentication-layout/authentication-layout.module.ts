import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationLayoutComponent} from "./authentication-layout.component";
import {AuthenticationRoutingModule} from "./authentication-routing.module";


@NgModule({
    declarations: [AuthenticationLayoutComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule
    ]
})
export class AuthenticationLayoutModule {
}
