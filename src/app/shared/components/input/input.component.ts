import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ez-input',
  template: `
    <div class="group">
      <input (input)="onInput($event)" [value]="value" class="ez-input" [type]="type" placeholder="placeholder">
      <label class="input-label text-truncate w-100">{{placeholder}}</label>
    </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  value: any;

  @Input()
  type: 'text' | 'number' | 'password' = 'text';

  @Input()
  placeholder: string = 'Placeholder';

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter<any>();

  onInput(e: any): void {
    setTimeout(() => this.valueChange.emit(e.target.value), 200);
  }
}
