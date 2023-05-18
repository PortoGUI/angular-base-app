import {Component} from '@angular/core';

import {SnacksUtils} from '../../shared/utils/snacks-utils';
import {GlobalUtils} from '../../shared/utils/global-utils';

@Component({
  selector: 'ez-authentication-layout',
  styleUrls: ['./authentication-layout.component.scss'],
  template: `
    <ng-container>
      <div id="content-authentication" class="h-100 d-flex justify-content-center align-items-sm-center">
        <div id="card-authentication" class="mt-5 mt-md-auto mx-3 mx-md-auto mb-auto">
          <div class="row">
            <div class="col-12 mb-2 d-flex justify-content-center align-items-center">
              <img title="register here" id="logo" src="../../../assets/svg/plus.svg" alt="Logo Enterprise" (click)="registerClick()">
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center align-items-center">
            <h4>Sign in or register</h4>
          </div>
          <form>
            <div class="row">
              <div class="col-12 mb-3">
                <ez-input [(value)]="credentials.login" type="text" placeholder="E-mail / Username"></ez-input>
              </div>
              <div class="col-12 mb-3">
                <ez-input [(value)]="credentials.password" type="password" placeholder="Password"></ez-input>
              </div>
              <div class="col-12 mb-3 d-flex justify-content-end align-items-center">
                <ez-linker (clicker)="forgotClick()">Forgot my password</ez-linker>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-12 mt-2 d-flex justify-content-center align-items-center">
              <ez-button text="Sign in" styleType="main-button" (clicker)="singInClick()"></ez-button>
            </div>
          </div>
        </div>
      </div>
    </ng-container>

    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  `,
})
export class AuthenticationLayoutComponent {
  credentials: Credentials = new Credentials();

  forgotClick(): void {
    if (GlobalUtils.isValid(this.credentials.login)) {
    } else {
      SnacksUtils.info('Please fill in your email or username.');
    }
  }

  registerClick(): void {
    SnacksUtils.warn('Temporarily unavailable');
  }

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
