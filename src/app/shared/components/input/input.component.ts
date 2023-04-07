import {Component, Input} from '@angular/core';

@Component({
  selector: 'ez-input',
  template: `
      <div class="group">
          <input class="ez-input" [type]="type" placeholder="placeholder">
          <label class="input-label text-truncate w-100">{{placeholder}}</label>
      </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input()
  type: 'text' | 'number' | 'password' = 'text';

  @Input()
  placeholder = 'Placeholder';
}
