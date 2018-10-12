import { Component, Input } from '@angular/core';

@Component({
  selector: 'a9d-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputPhrase: string;

  updateInput( $event ) { this.inputPhrase = $event; }
}
