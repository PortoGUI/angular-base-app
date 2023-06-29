import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ez-not-found',
  template: `
      <div id="not-found">
          <div id="content-back">
              <h1 id="message">This page was not found</h1>
              <ez-button text="Back to start" (clicker)="back()"></ez-button>
          </div>
      </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private router: Router) {
  }

  back(): void {
    this.router.navigate(['/']);
  }
}
