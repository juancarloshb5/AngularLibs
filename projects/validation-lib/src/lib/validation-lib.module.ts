import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationLibComponent } from './validation-lib.component';



@NgModule({
  declarations: [ValidationLibComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ValidationLibComponent]
})
export class ValidationLibModule { }
