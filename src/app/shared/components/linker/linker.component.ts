import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ez-linker',
  template: `
    <span (click)="clicker.emit($event)">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    span {
      transition: 0.05s;
      color: lighten(#000000, 60);
      cursor: pointer;
    }

    span:hover {
      text-decoration: underline;
      color: #000000
    }
  `]
})
export class LinkerComponent {
  @Output()
  clicker: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
}
