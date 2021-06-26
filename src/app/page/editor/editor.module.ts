import {NgModule} from '@angular/core';
import {EditorComponent} from './editor.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild([
      {path: ':mode/:articleId', component: EditorComponent}
    ])
  ]
})
export class EditorModule {
}
