import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton outline status="info" *ngIf="!value">{{value}}</button>
    <button nbButton outline status="warning" *ngIf="value=='O'">{{value}}</button>
    <button nbButton outline status="danger" *ngIf="value=='X'">{{value}}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']

})
export class SquareComponent {
  @Input() value: 'X' | 'O'
}
