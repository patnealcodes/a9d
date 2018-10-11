import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as ClipboardJS from 'clipboard';

@Component({
  selector: 'a9d-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements AfterViewInit {
  @Input() inputPhrase: string;

  @ViewChild('translatedPhrase') translatedPhrase;

  clipboard: string;

  constructor( public snackBar: MatSnackBar ) {}

  ngAfterViewInit() {
    const clipboard = new ClipboardJS('.a9d-copy-button');

    clipboard.on('success', e => {
      this.snackBar.open('Copied!', null, {
        duration: 2000,
        verticalPosition: 'top'
      });

      e.clearSelection();
    });

    clipboard.on('error', e => {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  }
}
