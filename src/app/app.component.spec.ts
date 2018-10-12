import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { A9dPipe } from './pipes/a9d.pipe';

describe('AppComponent', () => {
  let fixture, app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        InputComponent,
        OutputComponent,
        A9dPipe
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should respond to updateInput event', () => {
    expect(app.inputPhrase).toBeUndefined();
    app.updateInput('test');
    expect(app.inputPhrase).toEqual('test');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to a9d!');
  // });
});
