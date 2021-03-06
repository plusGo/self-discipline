import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownEditorComponent} from './markdown-editor/markdown-editor.component';
import {MarkdownViewerComponent} from './markdown-viwer/markdown-viewer.component';


@NgModule({
  declarations: [
    MarkdownEditorComponent,
    MarkdownViewerComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    MarkdownEditorComponent,
    MarkdownViewerComponent
  ]
})
export class MarkdownModuleModule {
}
