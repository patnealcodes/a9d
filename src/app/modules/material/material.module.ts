import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatSnackBarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ],
})
export class MaterialModule { }
