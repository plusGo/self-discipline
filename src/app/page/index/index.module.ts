import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {ShareModule} from '../../share/share.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    ShareModule
  ]
})
export class IndexModule {
}
