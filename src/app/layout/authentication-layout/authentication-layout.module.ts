import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationLayoutComponent} from "./authentication-layout.component";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {ButtonModule} from "../../shared/components/button/button.module";
import {LinkerModule} from "../../shared/components/linker/linker.module";
import {InputModule} from "../../shared/components/input/input.module";


@NgModule({
    declarations: [AuthenticationLayoutComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ButtonModule,
        LinkerModule,
        InputModule
    ]
})
export class AuthenticationLayoutModule {
}
