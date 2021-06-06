import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { DelonFormModule } from '@delon/form';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    DelonFormModule.forRoot()
  ]
})
export class CoreModule {
}
