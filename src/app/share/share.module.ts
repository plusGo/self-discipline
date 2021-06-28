import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DelonFormModule} from '@delon/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {HeaderComponent} from './component/header/header.component';
import {RouterModule} from '@angular/router';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {RegisterComponent} from './component/register/register.component';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {AttachmentImgPipe} from './pipe/attachment-img.pipe';
import {LoginComponent} from './component/login/login.component';
import {AuthImgComponent} from './component/auth-img/auth-img.component';


export const ZORRO_MODULES = [
  NzButtonModule,
  NzMenuModule,
  NzInputModule,
  NzIconModule,
  NzDropDownModule,
  NzPopoverModule,
  NzFormModule,
  NzSelectModule,
  NzUploadModule
];
export const COMPONENTS = [HeaderComponent, RegisterComponent, AuthImgComponent, LoginComponent];
export const PIPES = [AttachmentImgPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DelonFormModule,
    RouterModule,
    ...ZORRO_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DelonFormModule,
    ...ZORRO_MODULES,
    ...COMPONENTS,
    ...PIPES
  ],
  entryComponents: [RegisterComponent, LoginComponent]
})
export class ShareModule {
}
