import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MaterialModule, BrowserAnimationsModule ],
      declarations: [ InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit inputChange event', ( done ) => {
    const expectedInputPhrase = 'yay!';

    component.inputPhrase = expectedInputPhrase;

    component.inputChange.subscribe( e => {
      expect( e ).toEqual( expectedInputPhrase );
      done();
    });

    component.emitInputChange();
  });

  it('should handle clearing the inputPhrase', ( done ) => {
    const expectedInputPhrase = 'boo!';

    component.inputPhrase = expectedInputPhrase;

    component.inputChange.subscribe( e => {
      expect( e ).toEqual( '' );
      done();
    });

    component.clearInputPhrase();

    expect( component.inputPhrase ).toBe( '' );
  });
});
