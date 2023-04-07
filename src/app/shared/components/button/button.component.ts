import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ez-button',
  template: `
    <button class="button {{styleType}} {{type}}" (click)="clicker.emit($event)">
      <i class="{{icon}}"></i>
      <span>{{text}}</span>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  text = ''

  @Input()
  icon = ''

  @Input()
  styleType = 'default-button'

  @Input()
  type = 'normal-style-button'

  @Output()
  clicker: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
