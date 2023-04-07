import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
  }
}
