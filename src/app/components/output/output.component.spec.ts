import { A9dPipe } from './../../pipes/a9d.pipe';
import { MaterialModule } from './../../modules/material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';
import * as ClipboardJS from 'clipboard';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  let clipboard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ OutputComponent, A9dPipe ]
    })
    .compileComponents();

    clipboard = new ClipboardJS('.a9d-copy-button');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize clipboard', () => {
    expect(clipboard).toBeTruthy();
  });

  // NOTE: Unable to test clipboard copy programatically due to security reasons:
  // https://github.com/zenorocha/clipboard.js/issues/279
});
