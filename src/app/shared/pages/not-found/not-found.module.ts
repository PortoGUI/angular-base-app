import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found.component';
import {ButtonModule} from '../../components/button/button.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ]
})
export class NotFoundModule {
}
