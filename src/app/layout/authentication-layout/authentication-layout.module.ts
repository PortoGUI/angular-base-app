import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputModule} from '../../shared/components/input/input.module';
import {ButtonModule} from '../../shared/components/button/button.module';
import {LinkerModule} from '../../shared/components/linker/linker.module';
import {AuthenticationRoutingModule} from './authentication-routing.module';

import {AuthenticationLayoutComponent} from './authentication-layout.component';
import {CheckBoxModule} from '../../shared/components/check-box/check-box.module';

@NgModule({
  declarations: [AuthenticationLayoutComponent],
  imports: [
    InputModule,
    CommonModule,
    ButtonModule,
    LinkerModule,
    AuthenticationRoutingModule,
    CheckBoxModule
  ]
})
export class AuthenticationLayoutModule {
}
