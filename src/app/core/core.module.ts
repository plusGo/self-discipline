import {NgModule} from '@angular/core';
import {DelonFormModule} from '@delon/form';
import {HttpClientPlusModule} from 'ng-http-plus';
import {NzMessageModule} from 'ng-zorro-antd/message';

@NgModule({
  declarations: [],
  imports: [
    HttpClientPlusModule,
    DelonFormModule.forRoot(),
    NzMessageModule
  ],
  providers: []
})
export class CoreModule {
}
