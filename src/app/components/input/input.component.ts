import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'a9d-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputPhrase: string;

  @Output() inputChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  emitInputChange() {
    console.log('input changed');
    this.inputChange.emit( this.inputPhrase );
  }

  clearInputPhrase() {
    console.warn('clearing');
    this.inputPhrase = '';
    this.inputChange.emit(this.inputPhrase);
  }
}
