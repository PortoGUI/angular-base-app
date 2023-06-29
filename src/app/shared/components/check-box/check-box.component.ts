import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'ez-check-box',
  template: `
    <input #input id="check-input" type="checkbox" [checked]="value" (change)="onChange()">
    <label id="custom-check" for="check-input">{{text}}</label>
  `,
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnChanges {
  @ViewChild('input')
  checkBox: HTMLInputElement;

  @Input()
  value: boolean;

  @Output()
  valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  text: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] && this.checkBox) {
      this.checkBox.checked = this.value;
    }
  }

  onChange(): void {
    this.value = this.checkBox.checked;
    this.valueChange.emit(this.value);
  }
}
