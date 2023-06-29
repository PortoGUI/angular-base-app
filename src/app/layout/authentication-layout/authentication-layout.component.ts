import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {SnacksUtils} from '../../shared/utils/snacks-utils';
import {GlobalUtils} from '../../shared/utils/global-utils';

import {ScreenService, ScreenType} from '../../shared/services/screen.service';

@Component({
  selector: 'ez-authentication-layout',
  styleUrls: ['./authentication-layout.component.scss'],
  template: `
      <ng-container>
          <div class="row">
              <div class="col-md-4 p-5">
                  <ng-container [ngTemplateOutlet]="LoginTemplate"></ng-container>
              </div>
              <ng-container *ngIf="screen > screenType.MEDIUM">
                  <div class="col-8">
                      <div id="image-login"></div>
                  </div>
              </ng-container>
          </div>
      </ng-container>

      <ng-template #LoginTemplate>
          <form>
              <div class="row">
                  <div class="col-12 mb-3">
                      <h1>Welcome Back</h1>
                  </div>
                  <div class="col-12 mb-5">
                      <ez-input [(value)]="credentials.login" type="text" placeholder="E-mail / Username"></ez-input>
                  </div>
                  <div class="col-12 mb-3">
                      <ez-input [(value)]="credentials.password" type="password" placeholder="Password"></ez-input>
                  </div>
                  <div class="col-12 mb-3 mt-5">
                      <div class="row g-0">
                          <div class="col-6">
                              <ez-check-box [(value)]="remember" text="Remember Password"></ez-check-box>
                          </div>
                          <div class="col-6 d-flex justify-content-end align-items-center">
                              <ez-linker (clicker)="forgotClick()">Forgot password</ez-linker>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
          <div class="row">
              <div class="col-12 mt-2 d-flex justify-content-center align-items-center">
                  <ez-button text="Sign in" styleType="main-button" (clicker)="singInClick()"></ez-button>
              </div>
          </div>
      </ng-template>
  `,
})
export class AuthenticationLayoutComponent implements OnInit, OnDestroy {
  credentials: Credentials = new Credentials();
  subscriber: Subscription;

  screen: ScreenType;
  screenType = ScreenType;
  remember: boolean
  constructor(private screenService: ScreenService) {
  }

  ngOnInit() {
    this.subscriber = this.screenService.screenChange.subscribe((type: ScreenType) => this.screen = type);
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  forgotClick(): void {
    if (GlobalUtils.isValid(this.credentials.login)) {
    } else {
      SnacksUtils.info('Please fill in your email or username.');
    }
  }

  // registerClick(): void {
  //   SnacksUtils.warn('Temporarily unavailable');
  // }

  singInClick(): void {
    let message = '';
    if (!GlobalUtils.isValid(this.credentials.login)) {
      message += 'Please fill in the login field. \r\n';
    }
    if (!GlobalUtils.isValid(this.credentials.password)) {
      message += 'Please fill in the password field.';
    }
    if (GlobalUtils.isValid(message)) {
      SnacksUtils.error(message);
    } else {
      SnacksUtils.error('Invalid login. Check your credentials.');
    }
  }
}

class Credentials {
  login: string;
  password: string;

  constructor() {
    this.login = '';
    this.password = '';
  }
}
