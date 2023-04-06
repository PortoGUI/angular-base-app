import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./shared/services/auth-guard.service";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'authentication'},
  {
    path: 'authentication',
    loadChildren: () => import('../app/layout/authentication-layout/authentication-layout.module')
      .then((m) => m.AuthenticationLayoutModule),
  },
  {
    path: 'authenticated', canActivate: [AuthGuard],
    loadChildren: () => import('../app/layout/authenticated-layout/authenticated-layout.module')
      .then((m) => m.AuthenticatedLayoutModule),
  },
  {path: '**', redirectTo: 'authentication'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
