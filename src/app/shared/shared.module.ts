import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ],
  declarations: []
})
export class SharedModule { }
