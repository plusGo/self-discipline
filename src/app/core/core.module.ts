import {NgModule} from '@angular/core';
import {DelonFormModule} from '@delon/form';
import {HttpClientPlusModule} from 'ng-http-plus';

@NgModule({
  declarations: [],
  imports: [
    HttpClientPlusModule,
    DelonFormModule.forRoot()
  ]
})
export class CoreModule {
}
