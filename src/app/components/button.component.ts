import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngClass]="classes">{{ label }}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type: string;
  @Input() outline = false;
  @Input() label = '';

  classes = {};

  ngOnInit(): void {
    this.classes = {
      btn: true,
      outline: this.outline,
      default: this.type === 'default',
      success: this.type === 'success',
      info: this.type === 'info',
      warning: this.type === 'warning',
      danger: this.type === 'danger'
    };
  }

}
