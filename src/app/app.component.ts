import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'bl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-library';
  @Input() test;
  @Output() onTest = new EventEmitter();

  @HostListener('click', [])
  onClick() {
    this.onTest.emit('Test')
  }
}
