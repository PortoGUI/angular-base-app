import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthenticatedLayoutComponent} from "./authenticated-layout.component";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {NotFoundComponent} from "../../shared/pages/not-found/not-found.component";

const routes: Routes = [
    {
        path: '', component: AuthenticatedLayoutComponent,
        children: [{path: 'profile', component: ProfileComponent}],
    },
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticatedRoutingModule {
}
