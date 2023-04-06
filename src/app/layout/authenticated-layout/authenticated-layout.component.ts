import {Component} from '@angular/core';

@Component({
    selector: 'ez-authenticated-layout',
    template: `
        <ng-container>
            authenticated
        </ng-container>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./authenticated-layout.component.scss']
})
export class AuthenticatedLayoutComponent {
}
