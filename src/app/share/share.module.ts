import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DelonFormModule} from '@delon/form';


export const ZORRO_MODULES = []

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DelonFormModule,
    ...ZORRO_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DelonFormModule,
    ...ZORRO_MODULES
  ]
})
export class ShareModule {
}
