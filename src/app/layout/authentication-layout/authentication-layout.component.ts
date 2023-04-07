import {Component} from '@angular/core';

@Component({
  selector: 'ez-authentication-layout',
  styleUrls: ['./authentication-layout.component.scss'],
  template: `
    <ng-container>
      <div id="content-authentication" class="h-100 d-flex justify-content-center align-items-sm-center">
        <div id="card-authentication" class="mt-5 mt-md-auto mx-3 mx-md-auto mb-auto">
          <div class="row">
            <div class="col-12 mb-2 d-flex justify-content-center align-items-center">
              <img title="Cadastre-se aqui" id="logo" src="../../../assets/svg/plus.svg" alt="Logo Enterprise">
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center align-items-center">
            <h4>Acesse ou Cadastre-se</h4>
          </div>
          <form>
            <div class="row">
              <div class="col-12 mb-3">
                <ez-input placeholder="E-mail / Nome de Usuário"></ez-input>
              </div>
              <div class="col-12 mb-1">
                <ez-input type="password" placeholder="Senha"></ez-input>
              </div>
              <div class="col-12 mb-3 d-flex justify-content-end align-items-center">
                <ez-linker (clicker)="forgotClick($event)">Esqueci Minha Senha</ez-linker>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-12 mt-2 d-flex justify-content-center align-items-center">
              <ez-button text="Acessar" styleType="main-button"></ez-button>
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
  forgotClick(event: MouseEvent) {
    console.log(event);
  }

  registerClick(event: MouseEvent) {
    console.log(event);
  }
}
