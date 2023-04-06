import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationLayoutComponent} from "./authentication-layout.component";

const routes: Routes = [
    {path: '', component: AuthenticationLayoutComponent,}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
